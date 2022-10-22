const mysql = require("mysql");
// 创建连接池
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "vue3_project",
  multipleStatements: true,
});
// 封装查询语句
function query(sql) {
  return new Promise((res, rej) => {
    pool.query(sql, (error, data) => {
      if (error) {
        rej(error)
      } else {
        res(data)
      }
    })
  })
};
module.exports = query;