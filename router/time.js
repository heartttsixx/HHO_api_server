//服务器时间戳
//-------------------
const express=require('express')
const router=express.Router()

//导入路由处理函数
const time=require('../router_handler/time')

//获取时间
router.get('/time',time.getTime)

module.exports=router

