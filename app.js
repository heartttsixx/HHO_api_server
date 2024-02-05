const express=require('express')
const app=express()

//导入上传图片的path
const path=require('path')
//cors中间件 （跨域问题）
const cors=require('cors')
app.use(cors())



const joi = require('joi');
//只能解析x-www-form-urlencoded的表单数据
app.use(express.urlencoded({extended:false}))

//路由前封装错误显示中间件
app.use((req,res,next)=>{
    //status为1为失败
    res.cc=function(err,status=1){
        res.send({
            status,
            message:err instanceof Error ? err.message:err,
        })
    }
    next()
})

//解析token的中间件
const expressJWT=require('express-jwt')
const config=require('./config')

//解析token,带api前缀无需认证
app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))

/*--------------------------------------------------------------------------------- */
    //路由
//导入时间路由
const serverTime=require('./router/time')
//导入路由user
const userRouter=require('./router/user')
app.use('/api',userRouter,serverTime)
//导入使用用户信息路由
const userinfoRouter=require('./router/userinfo')
app.use('/my',userinfoRouter)
//导入食物分类路由
const foodcategory=require('./router/foodcategory')
app.use('/my/food',foodcategory)
//搜索路由
const foodsearch=require('./router/search')
app.use('/index',foodsearch)
//订单路由
const order=require('./router/order')
app.use('/pay',order)

/**--店铺路由*--/
//奶茶店路由


// //上传图片
// const multer=require('multer')
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'images')
//     },
//     filename: (req,file,cb)=>{
//         console.log(file)
//         cb(null,Date.now()+path.extname(file.originalname))
//     }
// })
// const upload=multer({storage:storage})

/*--------------------------------------------------------------------------------- */
//定义错误级别中间件
app.use((err,req,res,next)=>{
    if(err instanceof joi.ValidationError) return res.cc(err)
    //身份认证失败
    if(err.name==='UnauthorizedError') return res.cc('身份认证失败')
    //未知错误
    res.cc(err)
    next()
})
/*-------------------------------------------------------------------------------- */

// //上传图片
// app.post('/upload',upload.single('image'),(req,res)=>{
//     res.send('图片上传成功')
// })

app.listen(80,()=>{
    console.log('api server running at http://127.0.0.1')
})