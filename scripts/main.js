const navDomWriter = require('./nav/navDomWriter')
const blogListeners = require('./blog/blogEventListeners')
// const articleController = require("./blog/articleController")
const articleController = require("./blog/articleController")
const adminController = require("./admin/adminController")


navDomWriter()//call the navDomWriter function to write the navbar to the DOM
blogListeners() //adds listener to the Admin button on the blog page

articleController.init()
adminController.init()