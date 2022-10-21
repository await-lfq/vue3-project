const express=require("express");
const allRouter=require("./routers");
const server=express(allRouter);
server.use(express.static("./"));
server.use(allRouter);

server.listen(2000,()=>{
  console.log("服务器2000端口启动")
})
