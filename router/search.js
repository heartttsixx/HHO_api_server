//搜索api
//------------------------
const express=require('express')
const router=express.Router()

const foodsearch=require('../router_handler/search')
//搜索食物分类
router.get('/search',foodsearch.getFoodSearch)

module.exports=router