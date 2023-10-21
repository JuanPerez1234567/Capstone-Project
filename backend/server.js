require('dotenv').config()


const mysql = require('mysql2')
const express = require('express')


//create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "capstone"
  });

//Connect
db.connect((err) =>{
    if (err) throw err
    else{
        console.log('MySql Connected...')
    }
})

//express app
const app = express()



app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()

})

//routes
app.get('/', (req, res) => {

   

    res.json({mssg: 'Welcome to the app'})

})

//listen for request
app.listen(process.env.PORT, () => { 
    console.log('listening on port 4000!!')
})