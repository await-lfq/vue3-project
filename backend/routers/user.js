const express = require("express");
const router = express.Router();
const {createToken,verifyToken}=require("../utils/token");
router.get("/login", (req, res) => {
  res.send("token")
});
module.exports = router;