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
            message:'获取食物分类列表成功',
            data:results,
        })
    })
}