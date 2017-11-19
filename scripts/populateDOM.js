const basicHtml = require('./contentHtml/basicHtml')
const navDomWriter = require('./nav/navDomWriter')
const initResumeDomWriter = require('./resume/resumeController')
const addAdminListener = require('./blog/blogEventListeners')
const adminEditListener = require('./admin/edit')
// const adminSubmitListener = require('./admin/adminEventListeners')
// const writeStoredBlogs = require('./blog/blogController')
const writeEditArticleTitles = require('./admin/writeEditArticleTitles')
const searchBlogs = require('./blog/search')
const db = require('./Database')

const populateDOM = domEl => {
    const Database = db.load();
    basicHtml.forEach(element => {
        document.getElementById(element.id.value).innerHTML = element.html.value; //assigns the contents of the innerHTMl object for each section to its corresponding element in index.html
    })
    //** each function that populated the dom elements of each section will go here **//
    navDomWriter()//call the navDomWriter function to write the navbar to the DOM
    addAdminListener() //adds listener to the Admin button on the blog page
    adminEditListener(db)
    // adminSubmitListener(db) //adds listener to the submit button on the admin page
    // writeStoredBlogs()
    searchBlogs() //adds the search blogs functionality
    writeEditArticleTitles() //writes the list of article titles to edit on the admin page
    initResumeDomWriter()
}

module.exports = populateDOM