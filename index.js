let express = require('express')
let server = express()
let port = 3000
let cors= require('cors')

server.use(cors())

require('./server-assets/db/mlab-config')


server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))


