const fs=require('fs')
const mysql=require('mysql')
const connectiondb=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'headheldorder'
})
connectiondb.connect()
const imagesBuffer1=fs.readFileSync('./images/dishimg/p1.jpg')//移动路径需修改
const base64Imag1=imagesBuffer1.toString('base64');
//创建中餐店店铺
const sqlStr='insert into allrestaurant (id,restname,location,restaurantAdmin,restaurantAdminPhone) values(?,?,?,?,?)'
connectiondb.query(sqlStr,[1,'zcd','四川成都','lht',13518300001],(err,results)=>{
    //初始化店铺餐品列表请复制
    const sqlStr5='insert into rest_zcd (dishid,dishcategory,dishname,dishstorage,dishprice,dishpic,belongtorestId) values(?,?,?,?,?,?,?)'
    connectiondb.query(sqlStr5,[301,'炒菜','米饭','100','2', ,1],(err,results)=>{
        console.log('数据库店铺信息插入成功')
    })
    const sqlStr2='insert into rest_zcd (dishid,dishcategory,dishname,dishstorage,dishprice,dishpic,belongtorestId) values(?,?,?,?,?,?,?)'
    connectiondb.query(sqlStr2,[302,'炒菜','西红柿炒鸡蛋','50','14',/*base64Imag1*/,1],(err,results)=>{
        console.log('数据库店铺信息插入成功')
    })
    const sqlStr4='insert into rest_zcd (dishid,dishcategory,dishname,dishstorage,dishprice,dishpic,belongtorestId) values(?,?,?,?,?,?,?)'
    connectiondb.query(sqlStr4,[303,'炒菜','莲白回锅','50','18', ,1],(err,results)=>{
        console.log('数据库店铺信息插入成功')
    })
    const sqlStr3='insert into rest_zcd (dishid,dishcategory,dishname,dishstorage,dishprice,dishpic,belongtorestId) values(?,?,?,?,?,?,?)'
    connectiondb.query(sqlStr3,[304,'炒菜','尖椒回锅','50','18', ,1],(err,results)=>{
        console.log('数据库店铺信息插入成功')
    })
})
