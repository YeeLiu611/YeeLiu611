// 文件：functions/generateCodes.js

function generateRandomCode(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

exports.handler = async (event, context) => {
  // 1) 获取当前登录用户
  const { user } = context.clientContext || {};

  // 2) 如果没有用户信息，说明未登录
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Please Login' }),
    };
  }

  // 3) 判断用户是否拥有 admin 角色
  //    在 Netlify Identity 的 Dashboard 中，可为该用户添加 "admin" 角色
  const roles = user.app_metadata && user.app_metadata.roles;
  const isAdmin = roles && roles.includes('admin');
  if (!isAdmin) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "You don't have access" }),
    };
  }

  // 4) 只有 admin 才能执行后续逻辑：生成三种长度的随机码
  const shortCodes = [];
  const mediumCodes = [];
  const longCodes = [];

  for (let i = 0; i < 5; i++) {
    shortCodes.push(generateRandomCode(6));
    mediumCodes.push(generateRandomCode(10));
    longCodes.push(generateRandomCode(16));
  }

  // 5) 返回结果
  return {
    statusCode: 200,
    body: JSON.stringify({
      shortCodes,
      mediumCodes,
      longCodes
    })
  };
};