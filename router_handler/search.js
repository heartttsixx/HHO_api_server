const db=require('../db/index')
//搜索接口
exports.getFoodSearch=(req,res)=>{
//通过别名查询
    const sqlStr='select * from category where alias like "%"?"%" '
    const input=req.query.input
    db.query(sqlStr,input,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.length>0){
            return res.send({
                status:0,
                massage:'查询成功',
                num:results.length,
                data:results,
            })
        }
        res.send('无结果')
    })
}
