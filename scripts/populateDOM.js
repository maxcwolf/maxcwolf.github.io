const innerHTML = require('./innerHTML/innerHTML')
const db = require('./Database')

const populateDOM = domEl => {
    const Database = db.load();
    innerHTML.forEach(element => {
        document.getElementById(element.id.value).innerHTML = element.html.value; //assigns the contents of the innerHTMl object for each section to its corresponding element in index.html
    })
    //each function that populated the dom elements of each section will go here
    //i.e. writeBlog()
}

module.exports = populateDOM