const express = require("express");
const app = express();
const ctrl = require('./controllers')
const sequelize = require('./database')
const cors = require('cors')

app.use(express.json());
app.use(cors())


// Sequelize is available via npm
// npm install --save sequelize

// You'll also have to manually install the driver for your database of choice: POSTGRES
// $ npm install --save pg pg-hstore

//import sequelize to use


sequelize
  .sync()
  .then((res)=>{

    console.log(res);
  })
  .catch((err) => {
    console.error("DB NOT CONNECTED =O ", err);
  });

  
//We will create our tables in the Models folder and each table will be a file

app.get("/", ctrl.displayServer);

app.get("/allUsers" , ctrl.getAllUsers)

app.post('/addUser', ctrl.addUser)
  
  app.listen(process.env.SERVER_PORT, console.log(`PORT ${process.env.SERVER_PORT} is running~`));