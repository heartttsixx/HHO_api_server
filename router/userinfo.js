const express=require('express')
const router=express.Router()
//导入路由模块
const userInfo_handler=require('../router_handler/userinfo')
const expressjoi=require('@escook/express-joi')
//导入图片存储

//导入验证处理
const {schema_updateUserInfo,schema_avatar}=require('../schema/user')
//获取用户信息
router.get('/userinfo',userInfo_handler.getUserInfo)
//获取用户所有订单
router.get('/getorderinfo',userInfo_handler.getOrderInfo)
//获取用户订单详情
router.get('/getorderlistinfo',userInfo_handler.getOrderListInfo)
//更新信息
router.post('/userinfo',userInfo_handler.updateUserInfo)
//更换头像
router.post('/update/avatar',expressjoi(schema_avatar),userInfo_handler.updataAvatar)

module.exports=router