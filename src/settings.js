const { config } = require('dotenv')

config()

const PORT = process.env.PORT ?? 3000
const MONGODB_PASS = process.env.MONGO_PASS
const MONGODB_USER = process.env.MONGO_USER

module.exports = {
  PORT,
  MONGODB_PASS,
  MONGODB_USER
}
