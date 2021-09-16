const express = require("express");
const app = express();
const ctrl = require('./controllers')
const userModel = require('./models/userModel')

app.use(express.json());
app.use(express.urlencoded());


// Sequelize is available via npm
// npm install --save sequelize

// You'll also have to manually install the driver for your database of choice: POSTGRES
// $ npm install --save pg pg-hstore

//import sequelize to use
const { Sequelize, DataTypes } = require("sequelize");
// import dotenv / to use .env file


/*
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  //for using my heroku uri I needed this setup
  // to connect with other database hosts it could be different
  //or if hosting youself it yourself it will be a differnt setup
  dialect: "postgres",
  define: {
    freezeTableName: true
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./models/userModel')(sequelize, Sequelize);

//userModel(sequelize)
//testing if connection works

// sequelize.authenticate() <- replaced by sync
*/
const db = require('./models');

db.sequelize
  .sync({
    logging: console.log,
  })
  .then(()=>{
  
    console.log("DB connected !");
  })

  .catch((err) => {
    console.error("DB NOT CONNECTED =O ", err);
  });

  
//We will create our tables in the Models folder and each table will be a file

app.get("/", ctrl.displayServer);

app.get("/allUsers" , ctrl.getAllUsers)

app.post('/addUser', ctrl.addUser)
  
  app.listen(process.env.SERVER_PORT, console.log(`PORT ${process.env.SERVER_PORT} is running~`));