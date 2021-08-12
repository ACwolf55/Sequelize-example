const express = require('express')
const app = express()

// Sequelize is available via npm 
// npm install --save sequelize

// You'll also have to manually install the driver for your database of choice: POSTGRES
// $ npm install --save pg pg-hstore

//import sequelize to use
const { Sequelize} = require('sequelize')

// import dotenv / to use .env file  
require('dotenv').config()

const {CONNECTION_STRING,SERVER_PORT} = process.env
const sequelize = new Sequelize(CONNECTION_STRING, {
    //for using my heroku uri I needed this setup
    // to connect with other database hosts it could be different
    //or if hosting youself it yourself it will be a differnt setup
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized:false
        }
    }
})

//testing if connection works

sequelize.authenticate()
    .then( ()=>{console.log('DB connected !')})
    .catch((err)=>{
    console.error('DB NOT CONNECTED =O ',err)
    })
    
app.listen(SERVER_PORT, console.log(`${SERVER_PORT} is running~`))
    

    //We will create our tables in the Models folder and each table will be a file 