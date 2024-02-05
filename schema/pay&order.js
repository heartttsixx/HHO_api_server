//导入验证规则包
const joi = require('joi');

//定义提交订单
const totalprice=joi.number().required()
const belongtouserId=joi.number().required()
const location=joi.string().required()
const more=joi.string()
const table=joi.number().required()
//提交的数据验证为 对象数组
const list_item=joi.object().keys({
    dishid:joi.number().integer().required(),
    dishname:joi.string().required(),
    disnum:joi.number().integer().required(),
    priceofone:joi.number().integer().required(),
    totalprice:joi.number().integer().required(),
}).required()
const list=joi.array().items(list_item)
//定义提交订单的规则
exports.schema_addorder={
body:{
    totalprice,
    belongtouserId,
    location,
    table,
    more,
    list
}
}
