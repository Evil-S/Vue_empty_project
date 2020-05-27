export default {
  dateFormatFunc(fmt, date) {
    let ret;
    let opt = {
      'Y+': date.getFullYear().toString(),        // 年
      'm+': (date.getMonth() + 1).toString(),     // 月
      'd+': date.getDate().toString(),            // 日
      'H+': date.getHours().toString(),           // 时
      'M+': date.getMinutes().toString(),         // 分
      'S+': date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
      }
    }
    return fmt;
  },

  dateFormat(date) {
    return this.dateFormatFunc('YYYY-mm-dd HH:MM:SS', date);
  },
  getFormatNumber(nStr) {
    if (!nStr) {
      return '0'
    }
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }


};
