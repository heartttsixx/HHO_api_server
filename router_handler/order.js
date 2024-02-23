//导入数据库
const db=require('../db/index')
const timestamp=require('./time')
var a=0//店铺编号
//添加订单
var dishstorage=100
exports.addOrder=(req,res)=>{
    var time=new Date(timestamp.getTimestamp())//将number类型转化为时间//获取当前时间存入数据库

    const sqlStr='insert into orders (datetime,totalprice,belongtouserId,table,location,more) values(?,?,?,?,?)'
    db.query(sqlStr,[time,req.body.totalprice,req.user.id,req.body.table,req.body.location,req.body.more],(err,results)=>{
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
        for(const i=0;i<req.body.list.length;i++){//循环添加每一条数据
            const sql='insert into order_list (dishid,dishname,dishnum,priceofone,totalprice,belongtoordrId) values(?,?,?,?,?,?)'
            db.query(sql,
                [req.body.list[i].dishid,req.body.list[i].dishname,req.body.list[i].dishnum,req.body.list[i].priceofone,req.body.list[i].totalprice,a],//前端需要传一个list的对象数组，每个对象中包含这些
                (err,results)=>{
                if(err){
                    return res.cc(err)
                }
                if(results.affectedRows!==1) return res.cc('添加失败')
                res.cc('添加详情订单成功',0)
            //更新库存
                //判断店铺，获取当前点餐餐品的库存
                if(a==1){
                    db.query('select * from rest_zcd where dishid=?',req.body.list[i].dishid,
                    (err,results)=>{
                        if(err){
                            return res.cc(err)
                        }
                        dishstorage=results[0].dishstorage//获取店铺当前库存
                    })
                    dishstorage-=req.body.list[i].dishnum//当前库存-订单餐品数量=新库存
                    db.query('update rest_zcd set dishstorage=? where dishid=?',[dishstorage,req.body.list[i].dishid],(err,results)=>{
                        if(err){
                            return res.cc(err)
                        }
                        res.cc('库存更新成功')
                    })
                }
                if(a==2){
                    db.query('select * from rest_ncd where dishid=?',req.body.list[i].dishid,
                    (err,results)=>{
                        if(err){
                            return res.cc(err)
                        }
                        dishstorage=results[0].dishstorage//获取店铺当前库存
                    })
                    dishstorage-=req.body.list[i].dishnum//当前库存-订单餐品数量=新库存
                    db.query('update rest_ncd set dishstorage=? where dishid=?',[dishstorage,req.body.list[i].dishid],(err,results)=>{
                        if(err){
                            return res.cc(err)
                        }
                        res.cc('库存更新成功')
                    })
                }
                if(a==3){
                    db.query('select * from rest_tpd where dishid=?',req.body.list[i].dishid,
                    (err,results)=>{
                        if(err){
                            return res.cc(err)
                        }
                        dishstorage=results[0].dishstorage//获取店铺当前库存
                    })
                    dishstorage-=req.body.list[i].dishnum//当前库存-订单餐品数量=新库存
                    db.query('update rest_tpd set dishstorage=? where dishid=?',[dishstorage,req.body.list[i].dishid],(err,results)=>{
                        if(err){
                            return res.cc(err)
                        }
                        res.cc('库存更新成功')
                    })
                }
                
            })
        }
    })
    
}

