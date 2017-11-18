const db = require('../Database')

//nav bar objects
const homeNav = {
    'name' : 'Home',
}

const bioNav = {
    'name' : 'Bio',
}

const resumeNav = {
    'name' : 'Resume',
}

const blogNav = {
    'name' : 'Blog',
}

const projectsNav = {
    'name' : 'Projects',
}


//create blank nav bar array
const navBar = [];

//create array of objects into navBar
navBar.push(homeNav, bioNav, resumeNav, blogNav, projectsNav);

//load the database from local storage and store in Database variable
const Database = db.load()

//create a navBar object in the database and populate it with the basicHtml array of objects
Database.navBar = navBar

//push the database back into local storage
db.save(Database)

module.exports = navBar