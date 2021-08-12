const { DataTypes } = require('sequelize')

	// Primary key is automatically added to every table in sequelize under name 'id'
		// this is the id format:
		// id: {
		// 	allowNull: false,
		// 	autoIncrement: true,
		// 	primaryKey: true,
		// 	type: DataTypes.INTEGER
		// },

module.exports = (sequelize)=>{
    sequelize.define('user', {
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

}