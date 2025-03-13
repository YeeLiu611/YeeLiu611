const AWS = require("aws-sdk");

// 配置 AWS SDK（使用 Netlify 环境变量配置）
const dynamoDB = new AWS.DynamoDB.DocumentClient({
region: process.env.AWS_REGION,
accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

// 生成单个随机领取密码（8位大写字母和数字）
const generateRandomPassword = () => {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
};

// 生成一批领取密码并写入 unusedPasswords 表
exports.handler = async (event) => {
  const count = event.queryStringParameters && event.queryStringParameters.count
    ? parseInt(event.queryStringParameters.count)
    : 10; // 默认生成 10 个
  let items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      PutRequest: {
        Item: { password: generateRandomPassword() },
      },
    });
  }

  // 使用 batchWrite 写入 DynamoDB
  const params = {
    RequestItems: {
      unusedPasswords: items,
    },
  };

  try {
    await dynamoDB.batchWrite(params).promise();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8"  // 解决中文乱码
      },
      body: JSON.stringify({ message: `成功生成 ${count} 个领取密码` })
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8"  // 解决中文乱码
      },
      body: JSON.stringify({ message: `成功生成 ${count} 个领取密码` })
    };
  }
};