const AWS = require("aws-sdk");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

// DynamoDB 客户端配置
const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

// S3 客户端配置
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

// 生成唯一证书编号
const generateCertificateNumber = () => `CERT-${Date.now().toString(36).toUpperCase()}`;

// 上传文件到 S3，并返回公开 URL
const uploadToS3 = (localFilePath, certificateNumber) => {
  return new Promise((resolve, reject) => {
    fs.readFile(localFilePath, (err, fileContent) => {
      if (err) return reject(err);
      const params = {
        Bucket: process.env.S3_BUCKET,
        Key: `certificates/${certificateNumber}.png`,
        Body: fileContent,
        ContentType: "image/png",
      };
      s3.upload(params, (s3Err, data) => {
        if (s3Err) return reject(s3Err);
        resolve(data.Location);
      });
    });
  });
};

// 调用 Python 脚本生成证书图片，生成的图片存入系统临时目录
const generateCertificate = (name, certificateNumber) => {
  return new Promise((resolve, reject) => {
    // 使用操作系统临时目录作为输出目录
    const tmpDir = os.tmpdir();
    const localOutputPath = path.join(tmpDir, `${certificateNumber}.png`);
    const scriptPath = path.join(__dirname, "generateCertificate.py");

    console.log(`🖼️ 调用 Python 生成证书: ${scriptPath} 输出路径: ${localOutputPath}`);
    
    exec(`python3 ${scriptPath} "${name}" "${certificateNumber}" "${localOutputPath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ 生成证书失败: ${stderr || error.message}`);
        return reject(new Error(`Python 运行错误: ${stderr || error.message}`));
      }
      console.log(`✅ 证书生成成功: ${stdout}`);
      // 确保返回有效路径
      if (!localOutputPath) {
        return reject(new Error("生成证书失败: localOutputPath 未定义"));
      }
      resolve(localOutputPath);
    });
  });
};

exports.handler = async (event, context) => {
  try {
    console.log("💡 证书领取请求收到");

    // 添加用户身份验证：仅允许已登录用户领取证书
    const user = context.clientContext && context.clientContext.user;
    if (!user) {
      console.log("⚠️ 用户未登录，拒绝领取证书");
      return {
        statusCode: 401,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ message: "需要登录才能领取证书" }),
      };
    }

    const { password, name, email } = JSON.parse(event.body);
    if (!password || !name || !email) {
      console.log("⚠️ 输入信息不完整");
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ message: "请填写所有必填信息" }),
      };
    }

    // 检查领取密码是否有效
    console.log(`🔍 查询领取密码: ${password}`);
    const checkPassword = await dynamoDB.get({
      TableName: "unusedPasswords",
      Key: { password },
    }).promise();
    if (!checkPassword.Item) {
      console.log("❌ 领取密码无效或已被使用");
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ message: "领取密码无效或已被使用" }),
      };
    }

    // 生成证书编号
    const certificateNumber = generateCertificateNumber();
    console.log(`✅ 生成证书编号: ${certificateNumber}`);

    // 生成证书图片，存入临时目录
    console.log("🖼️ 开始生成证书图片");
    const localFilePath = await generateCertificate(name, certificateNumber);
    console.log(`📂 证书图片生成在本地: ${localFilePath}`);

    // 将生成的图片上传到 S3
    const s3Url = await uploadToS3(localFilePath, certificateNumber);
    console.log(`☁️ 证书图片上传至 S3成功, URL: ${s3Url}`);

    // 删除本地临时文件（可选）
    fs.unlink(localFilePath, (err) => {
      if (err) console.error("❌ 删除本地文件失败:", err);
      else console.log("✅ 本地证书文件已删除");
    });

    // 更新数据库：删除 unusedPasswords 记录，存入 usedPasswords 表
    console.log("💾 更新数据库，记录领取信息");
    await dynamoDB.transactWrite({
      TransactItems: [
        { Delete: { TableName: "unusedPasswords", Key: { password } } },
        { Put: { TableName: "usedPasswords", Item: { password, name, email, certificateNumber, usedAt: new Date().toISOString(), certUrl: s3Url } } }
      ],
    }).promise();

    console.log("✅ 领取证书成功");
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        message: "证书领取成功！",
        certificateNumber,
        certUrl: s3Url,
      }),
    };
  } catch (err) {
    console.error("❌ 领取证书失败:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ message: "领取失败，请稍后再试", error: err.message }),
    };
  }
};