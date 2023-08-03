const { connect } = require('mongoose')
const { MONGODB_PASS, MONGODB_USER } = require('./settings.js')

const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.fo3dmlm.mongodb.net/?retryWrites=true&w=majority`
const MONGODB_CONFIG = {
  dbName: 'posts'
}

function connectToDatabase () {
  connect(MONGODB_URI, MONGODB_CONFIG)
    .then(() => console.log('connected to database'))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

module.exports = connectToDatabase
