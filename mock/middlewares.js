module.exports = (request, response, next) => {
  console.log('-------------------------------')
  console.log('----------new request----------')
  console.log('-------------------------------')
  console.log('params:', request.params)
  console.log('query:', request.query)
  console.log('body:', request.body)
  console.log('headers:', request.headers)
  if (request.method === 'POST') {
    request.method = 'GET'
    request.query = request.body
  }
  if ((request.headers['content-type'] || '').startsWith('multipart/form-data')) {
    response.header('content-type', 'text/html')
  }
  next()
}
