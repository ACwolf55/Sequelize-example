const Sequelize = require('sequelize') 

const sequelize = require('./database')


    const Users = sequelize.define('users', {
        username: {
            type: Sequelize.STRING,
            allowNull: false, //cannot be emptycode
            unique:true,
            validate: {
                is: /^\w{3,}$/
                // this validate  & REGEX is recommended by the Sequelize team, it will make sure
                //usernames to have length of at least 3, and only use letters, numbers and underscores.
            }
        },
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        }
    });

module.exports = Users