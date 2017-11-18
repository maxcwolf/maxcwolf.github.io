const blogArticleFactory = require('../blog/blogFactory')
const db = require('../Database')


//create function that creates a new article object using the articlefactory and stores it in a newArticle variable...
function adminSubmitListener() {

    //get element ids of submit button and run the storeNewBlog function
    document.getElementById('submitButt').addEventListener('click', event => {

        const newArticle = blogArticleFactory(
            null,
            document.getElementById('authorID').value,
            document.getElementById('titleID').value,
            document.getElementById('blogID').value,
            document.getElementById('tagsID').value.split(', ')
        )
        
        Database = db.load()
        
        Database.blogs = Database.blogs || {}
        
        // Create articles key if it doesn't exist
        Database.blogs.articles = Database.blogs.articles || [];
        
        // ...adds new article to array
        Database.blogs.articles.push(newArticle);
        
        // Flip the order of articles contained in the blog database (descending order)
        Database.blogs.articles.sort((previous, next) => next.id - previous.id);
        
        //serialize and store database
        db.save(Database)
        
        //reload the page so that the newly entered data is displayed on the page
        location.reload();
        
        console.log('submit button pressed')
        console.log(Database.blogs.articles)
        

    });

}


module.exports = adminSubmitListener

