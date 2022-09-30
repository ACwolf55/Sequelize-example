const { restart } = require("nodemon");
const db = require("./database")
const {DataTypes, Sequelize } = require("sequelize");
const User = db.user;

module.exports = {
    displayServer: (req, res) => {
        res.send("Server Running!");
      },

    getAllUsers: (req, res) => {
       User.findAll()
        .then(allUsers =>{
            console.log(allUsers)
            res.json(allUsers);
        })
    },

    addUser: (req,res) => {
        User.create({username: req.body.username})
        .then(newUser => {
            res.status(200).send(newUser);
        })
        .catch(err => {
            console.log(err);
        })
        //res.status(201).end(req.body.username)
      }
        
};