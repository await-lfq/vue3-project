const express = require("express");
const query = require("../utils/msyql");
const router = express.Router();
const { createToken, verifyToken } = require("../utils/token");
router.get("/login", async (req, res) => {
  res.send("token")
  let data
  try {
    data = await query("SELECT * FROM  user")
  } catch (error) {
    console.log(error);
    return
  }
  console.log(data, "data");

});
module.exports = router;