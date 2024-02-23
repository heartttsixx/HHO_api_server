
const express=require('express')
const router=express.Router()
//中餐店接口
const zcd=require('../../router_handler/restaurant/rest_zcd')
router.get('/zcd01',zcd.zcdData)
//面食
router.get('/zcd01/1',zcd.getZcdCategory1)
//饮品
router.get('/zcd01/2',zcd.getZcdCategory2)
//中餐
router.get('/zcd01/3',zcd.getZcdCategory3)
//甜品
router.get('/zcd01/4',zcd.getZcdCategory4)

module.exports=router