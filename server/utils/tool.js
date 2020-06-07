/** 
* @func
* @des 格式化日期
* @param {boolean} 是否返回明天的日期
*/
exports.formateDate=(date,later)=>{
    var obj={}
    var d=new Date(date)
    obj.today=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
    later&&(obj.tomorrow=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+(d.getDate()+1))
    return obj;
}
exports.getCurrentYearBoundary=()=>{
    var year=new Date().getFullYear();
    return {
        startTime:year+'-01-01',
        endTime:year+'-12-01'
    }
}