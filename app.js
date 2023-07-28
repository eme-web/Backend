const express = require('express');
require('dotenv').config()

//config.dotenv();

const PORT = process.env.PORT
app = express()

app.use(express.json())

const server = () => {
    app.listen(PORT, ()=> {
        console.log("Server is listening on port", PORT)

})

}

server()