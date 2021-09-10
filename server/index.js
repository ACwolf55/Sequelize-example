const express = require("express");
const app = express();
const ctrl = require('./controllers')

// Sequelize is available via npm
// npm install --save sequelize

// You'll also have to manually install the driver for your database of choice: POSTGRES
// $ npm install --save pg pg-hstore

//import sequelize to use
const { Sequelize, DataTypes } = require("sequelize");
// import dotenv / to use .env file
require("dotenv").config();


// const { CONNECTION_STRING, SERVER_PORT } = process.env;
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  //for using my heroku uri I needed this setup
  // to connect with other database hosts it could be different
  //or if hosting youself it yourself it will be a differnt setup
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});




const User = sequelize.define('User', {
  username: {
      allowNull:false, //cannot be empty
      type: DataTypes.STRING,
      unique:true,
      validate: {
          is: /^\w{3,}$/
          // this validate  & REGEX is recommended by the Sequelize team, it will make sure
          //usernames to have length of at least 3, and only use letters, numbers and underscores.
      }
  
  }
})
//testing if connection works

// sequelize.authenticate() <- replaced by sync


sequelize
  .sync({
    logging: console.log,
    force: true
  })
  .then(()=>{
  
    console.log(User)
    console.log("DB connected !");
  })

  .catch((err) => {
    console.error("DB NOT CONNECTED =O ", err);
  });

app.listen(process.env.SERVER_PORT, console.log(`PORT ${process.env.SERVER_PORT} is running~`));

//We will create our tables in the Models folder and each table will be a file

app.get("/", ctrl.displayServer);


app.post('/post',(req,res)=>{
  User.create({
    username:req.body.username
  }).then()
})
