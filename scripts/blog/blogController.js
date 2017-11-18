const db = require('../Database')
const paginate = require('./pagination')

function writeStoredBlogs () {

    //load the database
    const Database = db.load()
    
    Database.blogs = Database.blogs || {}
    
    let storedBlogsArticles = Database.blogs.articles;

    paginate(storedBlogsArticles)
}

module.exports = writeStoredBlogs



