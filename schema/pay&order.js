//导入验证规则包
const joi = require('joi');

//定义提交订单
const totalprice=joi.number().required()
const location=joi.string().required()
const more=joi.string()
const table=joi.number().required()
const orderid=joi.number().required()
//提交的数据验证为 对象数组
const list_item=joi.object().keys({
    dishid:joi.number().integer().required(),
    dishname:joi.string().required(),
    disnum:joi.number().integer().required(),
    priceofone:joi.number().required(),
    totalprice:joi.number().required(),
})//[202,杨枝甘露,1,15,15]

const list=joi.array().items(list_item).required()
//定义提交订单的规则
exports.schema_addorder={
body:{
    totalprice,
    location,
    table,
    more,
    list
}
}
exports.schema_orderId={
    query:{
        orderid:orderid,
    }
}
