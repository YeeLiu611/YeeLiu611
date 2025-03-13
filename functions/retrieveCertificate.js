export async function handler(event) {
    const { email } = JSON.parse(event.body);
  
    const result = await dynamoDB.scan({
      TableName: "usedPasswords",
      FilterExpression: "email = :email",
      ExpressionAttributeValues: { ":email": email }
    }).promise();
  
    if (result.Items.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({ certificates: result.Items.map(item => ({ certificateNumber: item.certificateNumber, certPath: item.certPath })) })
      };
    } else {
      return { statusCode: 404, body: JSON.stringify({ message: "未找到领取记录" }) };
    }
  }