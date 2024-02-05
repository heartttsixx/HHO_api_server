//导入数据库
const db=require('../db/index')
//导入密码加密bcrypt包
const bcrypt=require('bcryptjs')

const jwt=require('jsonwebtoken')

const config=require('../config')

exports.regUser=(req,res)=>{
    const userinfo=req.body
    // if(!userinfo.username||!userinfo.password){
    // return res.send({
    // status:1,
    // message:'用户名或密码不合法'
    //     })
    // }

    //用户名是否被占用
    const sqlStr='select * from userinfo where username=?'

    db.query(sqlStr,userinfo.username,(err,results)=>{
        //sql语句失败
        if(err){
            return res.cc(err)
        }
        //判断用户名重复
        if(results.length>0){
            return res.cc('用户名被占用，请更换用户名')
        }
        //密码加密
        userinfo.password=bcrypt.hashSync(userinfo.password,10)
        //插入新用户
        const sql='insert into userinfo set ?'
        db.query(sql,{username:userinfo.username,password:userinfo.password},(err,results)=>{
        //sql语句失败
        if(err)
            return res.cc(err)
        
        if(results.affectedRows!==1) return res.cc('注册失败，请重试')
        res.cc('注册成功',0)
        })
    })
}
//登录
exports.login=(req,res)=>{
    const userinfo=req.body
    // if(!userinfo.username||!userinfo.password){
    //     return res.send({
    //     status:1,
    //     message:'用户名或密码不合法'
    //         })
    // }
    //根据用户名查询
    const sql='select * from userinfo where username=?'
    db.query(sql,userinfo.username,(err,results)=>{
        if(err) return res.cc(err)
        //sql执行成功,但获取数据条数！=1
        if(results.length!==1) return res.cc('登陆失败')
        //查询到用户，对比密码
        const compareResult=bcrypt.compareSync(userinfo.password,results[0].password)
        if(!compareResult) return res.cc('登陆失败,密码错误')
       

        //在服务器生成token  user的全部信息
        const user0={...results[0],password:''}//密码为空未挂载到token
        //用户信息加密生成token
        const tokenStr=jwt.sign(user0,config.jwtSecretKey,{expiresIn:config.expiresIn})
        res.send({
            status:0,
            message:'登陆成功',
            token:'Bearer '+tokenStr
        })
    })
    
}
