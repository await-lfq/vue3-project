const express = require("express");
const router = express.Router();
const user = require("./user"); // 用户接口
const allRouter = {
  user,
}
// 设置响应头(解决跨域)
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  };
});
for (const key in allRouter) {
  router.use(`/${key}`, allRouter[key]);
}
module.exports = router;