let BASE_URL = ''
let BASE_NAME = ''
const TIME_OUT = 10000
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = '/api'
    BASE_NAME = 'dev'
    break
  case 'production':
    BASE_URL = 'http://152.136.185.210:5000'
    BASE_NAME = 'prod'
    break
  default:
    BASE_URL = 'http://152.136.185.210:5000'
    BASE_NAME = 'test'
    break
}
export default {
  BASE_NAME,
  BASE_URL,
  TIME_OUT
}
