//格式化日期 默认yyyy-MM-dd
function timeFormat(date,fmt) 
{
	if(!fmt){
	fmt = "yyyy-MM-dd";
	}
//yyyy-MM-dd hhhhh:mm:ss:S
 var o = { 
 "M+" : date.getMonth()+1,     //月份
 "d+" : date.getDate(),     //日
 "h+" : date.getHours(),     //小时
 "m+" : date.getMinutes(),     //分
 "s+" : date.getSeconds(),     //秒
 "q+" : Math.floor((date.getMonth()+3)/3), //季度
 "S" : date.getMilliseconds()    //毫秒
 }; 
 if(/(y+)/.test(fmt)) 
 fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
 for(var k in o) 
 if(new RegExp("("+ k +")").test(fmt)) 
 fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
 return fmt; 
}

//从URL获取参数
 function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = decodeURIComponent(window.location.search).substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

//添加日期 输入"2020-04-05" 输出 "2020-06-06"
function addDays(datetime,days){ var oldTime = new Date(datetime.replace(/-/g,"/")); var fd = new Date(oldTime.valueOf()+days*24*60*60*1000); var newTime = fd.getFullYear()+"-";var month = fd.getMonth()+1; if(month>=10) newTime +=month+"-";else newTime+="0"+month+"-"; if(fd.getDate()>=10)newTime +=fd.getDate();else newTime+="0"+fd.getDate();return newTime;}

//验证qq号 至少5位
function isqq(str){ var result=str.match(/[1-9][0-9]{4,}/); if(result==null) return false; return true; }
//校验数字 输入一个字符校验一次
function keyUp(obj) {if(obj.value.length==1){obj.value=obj.value.replace(/[^1-9]/g,'')}else obj.value=obj.value.replace(/\D/g,'')}
//校验金额 输入金额最多为两位小数(且为正数)
function checkAmount(amount) { var exp = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/; if(amount) if(!exp.test(amount)) return false;else return true;else  return false; }	
//校验数组 输入可以为正数
function isNumber(str){return !isNaN(str);}
//校验整数 可为正负
function isInt(str){var result=str.match(/^(-|\+)?\d+$/);if(result==null) return false;return true;}
//校验长格式日期 YYYY-MM-DD HH:MM:SS" || "YYYY/MM/DD HH:MM:SS
function isDatetime(str){var result=str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);if(result==null) return false;var d= new Date(result[1], result[3]-1, result[4], result[5], result[6], result[7]);return (d.getFullYear()==result[1]&&(d.getMonth()+1)==result[3]&&d.getDate()==result[4]&&d.getHours()==result[5]&&d.getMinutes()==result[6]&&d.getSeconds()==result[7]);}
//校验格式日期 YYYY-MM-DD || YYYY/MM/DD
function isDate(str){var result=str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})$/);if(result==null) return false;var d=new Date(result[1], result[3]-1, result[4]);return (d.getFullYear()==result[1] && d.getMonth()+1==result[3] && d.getDate()==result[4]);}
//校验邮箱
function isEmail(str){var result=str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);if(result==null) return false;return true;}
//校验邮政编码
function isPostcode(str){var result=str.match(/[1-9]\d{5}/);if(result==null) return false;return true;}

//去掉最前面或最后面的空格
function trim(str){return str.replace(/(^\s*)|(\s*$)/g, "");}
//计算字符串长度 字符算一个
function strlen(str){return str.replace(/[^\x00-\xff]/g, "*").length;}
//