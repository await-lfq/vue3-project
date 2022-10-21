const express = require("express");
const user = require("./user"); // 用户接口
const router = express.Router();
const allRouter = {
  user,
}
for (const key in allRouter) {
  router.use(`/${key}`, allRouter[key]);
}
module.exports = router;