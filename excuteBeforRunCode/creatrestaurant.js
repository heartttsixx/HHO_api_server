const connectiondb=require('./uploadpic')

connectiondb.connect();
//创建店铺
const sqlStr='insert into allrestaurant (id,restname,location,restaurantAdmin,restaurantAdminPhone) values(?,?,?,?,?)'
connectiondb.query(sqlStr,[1,zcd,'四川成都','lht',13518300001],(err,results)=>{
    if(err) return res.cc(err)
    const sqlStr2='insert into rest_zcd (dishid,dishcategory,dishname,dishstorage,dishprice,dishpic,belongtorestId) values(?,?,?,?,?,?,?)'
    connectiondb.query(sqlStr,[],(err,results)=>{
        if(err) return res.cc(err)
        console.log('数据库店铺信息插入成功')
    })
})
