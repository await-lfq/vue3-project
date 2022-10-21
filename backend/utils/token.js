const jwt = require("jsonwebtoken");
const secret = "lfq"; // 密钥
// 生成token
function createToken(data, expiresIn = 2*60*60) {
  const token = jwt.sign({ data }, secret, { expiresIn })
  return token;
};
// 校验token
function verifyToken(token) {
  try {
    jwt.verify(token, secret);
    return true
  } catch (error) {
    return false;
  }
}
exports.verify = verifyToken;
exports.createToken = createToken;

