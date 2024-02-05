const { date } = require("joi")

exports.getTime=(req,res)=>{//todo
    const Datenow=new Date()
    //转时间戳
    const Timestamp=Datenow.getTime()
    //console.log(Timestamp)
    res.send({
        timestamp:Timestamp
    })
}
exports.getTimestamp=()=>{
    const Datenow=new Date()
    const Timestamp=Datenow.getTime()
    console.log(Timestamp)
    return Timestamp//number类型
}
