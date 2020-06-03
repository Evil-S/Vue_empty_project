import moment from 'moment'
export default {
  dateFormat(date, fmt='YYYY-MM-DD HH:mm:ss') {
    return moment(date).format(fmt)
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
