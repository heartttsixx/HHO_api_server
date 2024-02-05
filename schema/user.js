//导入验证规则包
const joi = require('joi');
//定义用户名与密码验证规则
const username=joi.string().alphanum().min(1).max(10).required()
const password=joi.string().pattern(/^[\S]{4,12}$/).required()
//定义id,nickname,phone,验证规则
const id=joi.number().min(1).required()
const nickname=joi.string().min(1).required()
const phone=joi.string().min(1).required()
//定义头像
const avatar=joi.string().dataUri().required()
//const phone=joi.number().integer().pattern(/^[\d]{11}$/).required()


//定义注册与登录表单数据的规则对象
exports.schema_login={
    body:{
        username,
        password
    },
}
//定义更新用户信息的规则对象
exports.schema_updateUserInfo={
    body:{
        id:id,
        //nickname:nickname,
        //phone:phone
    }
}
exports.schema_avatar={
    body:{
        avatar:avatar,
    }
}