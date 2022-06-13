require('dotenv').config()
const { BadRequest } = require("../error")
const jwt = require("jsonwebtoken")

const login = async(req, res) => {
    //req.body to the 
    const { username, password } = req.body
    if (!password || !username) {
        throw new BadRequest('Please Provide EMAIL AND PASSWORD')

    }
    // Created a constant id which shows current date 
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
    res.status(200).json({ msg: "USER CREATED", token })
}
const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, myelf ${req.user.username} `, secret: `here is your authorized data, your lucky number is ${luckyNumber}` })

}

module.exports = { login, dashboard }