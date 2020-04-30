import Vue from 'vue';
import manba from 'manba';

Vue.filter('format', (value, format) => {
  if (value) {
    return Manba(value).format(format || 'l');
  }
  return '';
});
//数字过滤计数
Vue.filter('NumFormat', function(value) {
  if(!value||typeof value!=="number") return '0.00';
  value = value.toFixed(2);
  /*原来用的是Number(value).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正*/
  /*后来改成了 Number(value)|0,但是输入超过十一位就为负数了，具体见评论 */
  var intPart = Number(value) - Number(value)%1; //获取整数部分（这里是windy93的方法）
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断

  var floatPart = ".00"; //预定义小数部分
  var value2Array = value.toString().split(".");

  //=2表示数据有小数位
  if(value2Array.length == 2) {
    floatPart = value2Array[1].toString(); //拿到小数部分

    if(floatPart.length == 1) { //补0,实际上用不着
      return intPartFormat + "." + floatPart + '0';
    } else {
      return intPartFormat + "." + floatPart;
    }

  } else {
    return intPartFormat + floatPart;
  }

})

Vue.filter('distance', (date) => {
  const hours = manba().distance(date, manba.HOUR);
  if (hours == 0) {
    const mins = manba().distance(date, manba.MINUTE);
    return `${mins}分钟`;
  } else if (hours < 24) {
    return `${hours}小时`;
  } else {
    const days = manba().distance(date, manba.DAY);
    return `${days}天`;
  }
});
