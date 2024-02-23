const { compareSync } = require("bcryptjs")
const { date, string } = require("joi")
//格式化时间为 年-月-日 时：分：秒
function formatDate(date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
exports.getTime0=(req,res)=>{//获取时间戳
    const Datenow=new Date()
    //转时间戳
    const Timestamp=Datenow.getTime()
    //console.log(Timestamp)
    res.send({
        timestamp:Timestamp
    })
}

exports.getTime1=(req,res)=>{//获取服务器时间
    const Datenow=new Date()
    const servertime=formatDate(Datenow)
    res.send({
        servertime:servertime
    })
}
//格式化时间函数 

exports.getTimestamp=()=>{
    const Datenow=new Date()
    const Timestamp=Datenow.getTime()
    return Timestamp//number类型
}