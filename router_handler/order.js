//导入数据库
const db=require('../db/index')
const timestamp=require('./time')
var a=0
//添加订单
exports.addOrder=(req,res)=>{
    var time=new Date(timestamp.getTimestamp())//将number类型转化为时间//获取当前时间存入数据库

    const sqlStr='insert into orders (datetime,totalprice,belongtouserId,table,location,more) values(?,?,?,?,?)'
    db.query(sqlStr,[time,req.body.totalprice,req.body.belongtouserId,req.body.table,req.body.location,req.body.more],(err,results)=>{
    if(err){
        return res.cc(err)
    }
    if(results.affectedRows!==1) return res.cc('添加失败')
        res.cc('添加成功订单成功',0)
        //获取最新添加的订单的id
        db.query('select id from orders order by id desc limit 1',(err,results)=>{
        if(err) return res.cc(err)
        a=JSON.stringify(results[0].id)//将获取返回的results先转化为json字符串 再将对象数组id值取出为a
        })
    //同时创建详情表单
    // const sql='insert into order_list (dishid,dishname,dishnum,priceofone,totalprice,belongtoordrId) values(?,?,?,?,?,?)'
    // db.query(sql,
    //     [req.body.list.dishid,req.body.list.dishname,req.body.list.dishnum,req.body.list.priceofone,req.body.list.totalprice,a],//前端需要传一个list的对象数组，每个对象中包含这些
    //     (err,results)=>{
    //     if(err){
    //         return res.cc(err)
    //     }
    //     if(results.affectedRows!==1) return res.cc('添加失败')
    //     res.cc('添加成功订单成功',0)
    // })
    })
}
