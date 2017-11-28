const navDomWriter = require('./nav/navDomWriter')
// const articleController = require("./blog/articleController")
const auth = require('./auth/auth')
const articleController = require("./blog/articleController")
const adminController = require("./admin/adminController")


navDomWriter()//call the navDomWriter function to write the navbar to the DOM

auth.init()
articleController.init()
adminController.init()

