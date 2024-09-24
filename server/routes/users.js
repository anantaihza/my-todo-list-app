const UserController = require("../controllers/userController")

const router = require("express").Router()

router.get("/me", UserController.getUserLogged)

module.exports = router