let mongoose = require('mongoose')
const connectionStrng = 'mongodb://rhianon:password1@ds014388.mlab.com:14388/cars'
let connection = mongoose.connection


mongoose.connect(connectionStrng)


connection.on('error', err => {
    console.log("DATABASE ERROR: ", err)
})

connection.once('open', ()=> {
    console.log("Connected to Database")
})


