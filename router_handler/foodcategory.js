//导入数据库
const db=require('../db/index')

exports.getFoodCategory=(req,res)=>{

    const sqlStr='select * from category order by id asc'
    db.query(sqlStr,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        res.send({
            status:0,
            message:'获取所有食物分类列表成功',
            data:results,
        })
    })
}
exports.getFoodCategory1=(req,res)=>{
    const sqlStr='select * from category where id>100&&id<200'//获取面食
    db.query(sqlStr,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        res.send({
            status:0,
            message:'获取面食分类列表成功',
            data:results,
        })
    })
}
exports.getFoodCategory2=(req,res)=>{
    const sqlStr='select * from category where id>200&&id<300'//获取饮品
    db.query(sqlStr,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        res.send({
            status:0,
            message:'获取饮品分类列表成功',
            data:results,
        })
    })
}
exports.getFoodCategory3=(req,res)=>{
    const sqlStr='select * from category where id>300&&id<400'//获取中餐
    db.query(sqlStr,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        res.send({
            status:0,
            message:'获取中餐分类列表成功',
            data:results,
        })
    })
}
exports.getFoodCategory4=(req,res)=>{
    const sqlStr='select * from category where id>400&&id<500'//获取甜品
    db.query(sqlStr,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        res.send({
            status:0,
            message:'获取甜品分类列表成功',
            data:results,
        })
    })
}