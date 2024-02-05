//添加订单
//-------------------
const express=require('express')
const router=express.Router()

//导入路由处理函数
const order=require('../router_handler/order')
//检测数据合法性
const expressjoi=require('@escook/express-joi')
//导入验证处理
const{schema_addorder}=require('../schema/pay&order')
//添加订单到数据库//添加订单详情列表
router.post('/addorder',expressjoi(schema_addorder),order.addOrder)
//获取订单
//在userinfo接口中
module.exports=router