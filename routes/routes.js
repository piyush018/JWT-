const express = require("express")
const Router = express.Router()

const { login, dashboard } = require("../controller/main")

const authMiddleware = require("../middleware/auth")
Router.route("/dashboard").get(authMiddleware, dashboard)
Router.route("/login").post(login)


module.exports = Router