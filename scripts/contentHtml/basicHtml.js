//requires each page's HTML.js file in this folder
const db = require("../Database")
const homeHtml = require("./homeHtml")
const resumeHtml = require("./resumeHtml")
const blogHtml = require("./blogHtml")
const adminHtml = require("./adminHtml")

const basicHtml = [homeHtml, resumeHtml, blogHtml, adminHtml]//add each HTML object from the requires above here

//load the database from local storage and store in Database variable
const Database = db.load()

//create a basicHtml object in the database and populate it with the basicHtml array of objects
Database.basicHtml = basicHtml

//push the database back into local storage
db.save(Database)

module.exports = basicHtml