//导入数据库
const db=require('../db/index')

exports.getUserInfo=(req,res)=>{
    //获取用户信息
    const sql='select id, username,phone,wxnum,nickname,gender,age,city,user_pic from userinfo where id=?'
    db.query(sql,req.user.id,(err,results)=>{//当用户信息认证成功 token会挂载一个user属性
        if(err) return res.cc(err)
        if(results.length!=1) return res.cc('获取用户信息失败！')
        res.send({
            status:0,
            message:'获取用户信息成功',
            data:results[0],
    })
    })
}

exports.getOrderInfo=(req,res)=>{
    const sql='select * from orders where belongtouserId=?'
//获取用户订单记录
    db.query(sql,req.user.id,(err,results)=>{
        if(err) return res.cc(err)
        res.send({
            status:0,
            message:'获取用户订单信息成功',
            data:results,
        })
    console.log(results)
    })
}
//获取用户订单详细记录
exports.getOrderListInfo=(req,res)=>{
const sql='select * from order_list where belongtoorderId=?'
db.query(sql,req.query.orderid,(err,results)=>{//前端传一订单id
    if(err) return res.cc(err)
    res.send({
        status:0,
        message:'获取用户订单详细列表成功',
        data:results,
    })
console.log(results)
})
}

exports.updateUserInfo=(req,res)=>{
    const sql='update userinfo set ? where id=?'
    db.query(sql,[req.body,req.user.id],(err,results)=>{
        if(err){
            return res.cc(err)
        }
        //判断用户名重复
        if(results.affectedRows!=1){
            return res.cc('更新失败')
        }
        res.cc('更新用户数据成功',0)
    })
}
exports.updataAvatar=(req,res)=>{
    const sql='update userinfo set user_pic=? where id=?'
    db.query(sql,[req.body.avatar,req.user.id],(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.affectedRows!=1){
            return res.cc('更换头像失败')
        }
        res.cc('更换头像成功',0)

    })
}