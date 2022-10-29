const express = require("express");
const bodyParser = require("body-parser");
const query = require("../utils/msyql");
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { createToken } = require("../utils/token");
// 登录接口
router.post("/login", urlencodedParser, express.json(), async (req, res) => {
  const { username, password } = req.body;
  let data
  try {
    data = await query(`SELECT * FROM user WHERE username="${username}"`);
  } catch (error) {
    console.log(error);
    return
  }
  // 未注册
  if (data.length === 0) {
    res.send({
      code: 1,
      msg: "该用户没有注册",
      data: ""
    })
    return
  }
  // 密码错误
  if (password !== data[0].password) {
    res.send({
      code: 1,
      msg: "密码错误",
      data: ""
    })
    return
  }
  // 登录成功
  const token = createToken(password);
  res.send({
    code: 0,
    msg: "登录成功",
    data: {
      token,
      username,
    }
  })

});
module.exports = router;