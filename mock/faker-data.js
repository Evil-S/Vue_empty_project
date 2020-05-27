module.exports = function () {
  let faker = require('faker')
  faker.locale = 'zh_CN'
  return {
    success: {
      code: '0',
      type: 0,
      msg: 'success',
      success: true
    }

  }
}
