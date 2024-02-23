//食物分类
//-------------------
const express=require('express')
const router=express.Router()

//导入路由处理函数
const foodcategory=require('../router_handler/foodcategory')
//获取食物分类
router.get('/category',foodcategory.getFoodCategory)
//面食
router.get('/category1',foodcategory.getFoodCategory1)
//饮品
router.get('/category2',foodcategory.getFoodCategory2)
//中餐
router.get('/category3',foodcategory.getFoodCategory3)
//甜品
router.get('/category4',foodcategory.getFoodCategory4)
module.exports=router
