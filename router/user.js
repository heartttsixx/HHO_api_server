const express=require('express')
const router=express.Router()

//导入路由处理函数
const user_handlder=require('../router_handler/user')
//检测数据合法性
const expressjoi=require('@escook/express-joi')
//导入验证处理
const {schema_login}=require('../schema/user')

//注册用户的路由(路径，处理函数)
router.post('/register',expressjoi(schema_login),user_handlder.regUser)
//登录的路由
router.post('/login',expressjoi(schema_login),user_handlder.login)


module.exports=router