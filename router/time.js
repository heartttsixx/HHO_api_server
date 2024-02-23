//服务器时间戳
//-------------------
const express=require('express')
const router=express.Router()

//导入路由处理函数
const time=require('../router_handler/time')

//客户端获取时间戳
router.get('/timestamp',time.getTime0)
//客户端获取时间字符串
router.get('/time',time.getTime1)
module.exports=router

