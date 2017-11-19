const basicHtml = require('./contentHtml/basicHtml')
const navDomWriter = require('./nav/navDomWriter')
const initResumeDomWriter = require('./resume/resumeController')
const blogListeners = require('./blog/blogEventListeners')
const adminListeners = require('./admin/adminEventListeners')
const writeEditArticleList = require('./admin/writeEditArticleList')
const searchBlogs = require('./blog/search')
const db = require('./Database')

const populateDOM = domEl => {
    const Database = db.load();
    basicHtml.forEach(element => {
        document.getElementById(element.id.value).innerHTML = element.html.value; //assigns the contents of the innerHTMl object for each section to its corresponding element in index.html
    })
    //** each function that populated the dom elements of each section will go here **//
    navDomWriter()//call the navDomWriter function to write the navbar to the DOM
    blogListeners() //adds listener to the Admin button on the blog page
    adminListeners(db)
    searchBlogs() //adds the search blogs functionality
    writeEditArticleList() //writes the list of article titles to edit on the admin page
    initResumeDomWriter()
}

module.exports = populateDOM