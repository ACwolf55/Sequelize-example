require("dotenv").config();
const Sequelize = require("sequelize");
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
  
  db.user = require('../models/userModel')(sequelize, Sequelize);
  module.exports = db;