//导入数据库
const db=require('../../db/index')
//获取中餐店数据
exports.zcdData=(req,res)=>{
    const sqlStr='SELECT * FROM rest_zcd '
    db.query(sqlStr,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.length>0){
            return res.send({
                results
            })
        }
        res.send('无结果')
    })
}
exports.getZcdCategory1=(req,res)=>{
    const sqlStr='select * from rest_zcd where id>100&&id<200'//获取面食
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
exports.getZcdCategory2=(req,res)=>{
    const sqlStr='select * from rest_zcd where id>200&&id<300'//获取饮品
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
exports.getZcdCategory3=(req,res)=>{
    const sqlStr='select * from rest_zcd where id>300&&id<400'//获取中餐
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
exports.getZcdCategory4=(req,res)=>{
    const sqlStr='select * from rest_zcd where id>400&&id<500'//获取甜品
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