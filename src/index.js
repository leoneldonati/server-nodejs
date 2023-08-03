const { server } = require('./app.js')
const { PORT } = require('./settings.js')
const connectToDatabase = require('./database.js')

connectToDatabase()

server.listen(PORT, () => console.log(`server started in port ${PORT}`))
