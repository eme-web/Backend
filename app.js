const express = require('express');
const {db} = require('./db/connectDB');
const cors = require('cors');
const {readdirSync} = require('fs');
const {routes} = require('./routes/transactions')
require('dotenv').config()


app = express()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes 
readdirSync('./routes').map((route) => 
    app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, ()=> {
        console.log("Server is listening on port", PORT)

})

}

server()