//食物分类
//-------------------
const express=require('express')
const router=express.Router()

//导入路由处理函数
const foodcategory=require('../router_handler/foodcategory')
//获取食物分类
router.get('/category',foodcategory.getFoodCategory)

module.exports=router
