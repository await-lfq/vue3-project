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
    data = await query(`select * from login where username="${username}"`);
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
// 用户信息接口
router.get("/getUserinfo", async (req, res) => {
  const { name } = req.query;
  let data
  try {
    data = await query(`select * from userinfo where name='${name}'`)
  } catch (error) {
    console.log(error);
    return
  }
  if (data.length === 0) { 
    res.send({
      code: 1,
      msg: "没有该用户信息",
      data: {},
    })
    return
  }
  if (data.length > 1) {
    res.send({
      code: 1,
      msg: "该用户名字重复",
      data: {},
    })
    return
  }
  res.send({
    code: 0,
    msg: "success",
    data: {
      ...data[0]
    },
  })

})
module.exports = router;