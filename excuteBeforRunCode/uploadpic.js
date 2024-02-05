//程序执行前运行，上传图片数据或默认数据到数据库
const fs=require('fs')
//导入直连数据库
const mysql=require('mysql')
const connectiondb=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'headheldorder'
})
connectiondb.connect()
/*-------------------------------------上传餐品默认图片------------------------------------- */
//直接保存base64文件到mysql
const imagesBuffer1=fs.readFileSync('./images/dishimg/p1.jpg')//移动路径需修改
const base64Imag1=imagesBuffer1.toString('base64');
const imagesBuffer2=fs.readFileSync('./images/dishimg/p2.jpg')//移动路径需修改
const base64Imag2=imagesBuffer2.toString('base64');
const imagesBuffer3=fs.readFileSync('./images/dishimg/p3.jpg')//移动路径需修改
const base64Imag3=imagesBuffer3.toString('base64');
//TODO

const sqlStr='update category set pic=? where id=?'
//执行语句
connectiondb.query(sqlStr,[base64Imag1,101],(err,results)=>{
    if(err) return res.cc(err)
})
connectiondb.query(sqlStr,[base64Imag2,102],(err,results)=>{
    if(err) return res.cc(err)
})
connectiondb.query(sqlStr,[base64Imag3,202],(err,results)=>{
    if(err) return res.cc(err)
})
//TODO

/*-------------------------------------上传首页轮播图片------------------------------------- */
 
const imagesSwiper1=fs.readFileSync('./images/indeximg')
const base64ImagSwiper1=imagesSwiper1.toString('base64');

const sqlStr2=
connectiondb.query(sqlStr2,[base64ImagSwiper1],(err,results)=>{
    if(err) return res.cc(err)
})


module.exports=connectiondb