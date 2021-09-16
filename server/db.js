const { Sequelize, DataTypes } = require("sequelize");
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