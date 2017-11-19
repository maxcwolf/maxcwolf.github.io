const blogArticleFactory = require('../blog/blogFactory')
const writeEditArticleList = require('./writeEditArticleList')
const paginate = require('../blog/pagination')
const db = require("../Database")

    
// When user clicks on anything in the Admin page hyperlink
function adminListeners() {
    
    //set edit mode and current article within the scoope of this function
    let editMode = false
    let currentArticle = null
    const Database = db.load()

    Database.blogs = Database.blogs || {}
    
    // Create articles key if it doesn't exist
    Database.blogs.articles = Database.blogs.articles || [];

    document.getElementById("admin").addEventListener(
        "click", e => {
//POPULATE THE FORM WITH EDITABLE ARTICLE
            if (e.target.id.startsWith("articleEdit_")) {
                // Which article did user click on?
                currentArticle = Database.blogs.articles.find(
                    a => a.id === parseInt(e.target.id.split("_")[1])
                )

                // Put values in the article form
                document.getElementById("titleID").value = currentArticle.title;
                document.getElementById("blogID").value = currentArticle.body;
                document.getElementById("authorID").value = currentArticle.author;
                document.getElementById("tagsID").value = currentArticle.tags;
                

                editMode = true
            }
//SAVE FUNCTIONALITY
            else if (e.target.id === 'submitButt' && editMode === false) {
                console.log('EDIT MODE = FALSE')
                const newArticle = blogArticleFactory(
                    null,
                    document.getElementById('authorID').value,
                    document.getElementById('titleID').value,
                    document.getElementById('blogID').value,
                    document.getElementById('tagsID').value.split(", ")
                )
                
                // ...adds new article to array
                Database.blogs.articles.push(newArticle);
                
                // Flip the order of articles contained in the blog database (descending order)
                Database.blogs.articles.sort((previous, next) => next.id - previous.id);
                
                //serialize and store database
                db.save(Database)

                //reset the form to blank
                document.forms["blogForm"].reset();                

                //refresh the page with the new article title in the edit list
                writeEditArticleList()

                //refresh the blogs page with the new article
                paginate(Database.blogs.articles)
            }

//EDIT FUNCTIONALITY
            else if (e.target.id === 'submitButt' && editMode === true) {
                console.log("EDIT MODE should = TRUE... it is actually", editMode)

                // Find the index of the selected message
                const articleIndex = Database.blogs.articles.findIndex(
                    article => article.id === currentArticle.id
                )
                // Update the message object at the matching index
                Database.blogs.articles[articleIndex] = blogArticleFactory(
                    //insert old messageId
                    Database.blogs.articles[articleIndex].id,
                    document.getElementById("authorID").value,
                    document.getElementById("titleID").value,
                    document.getElementById("blogID").value,
                    document.getElementById("tagsID").value.split(', ')
                )

                editMode = false
    
                db.save(Database)

                //reset the form to blank
                document.forms["blogForm"].reset();

                //refresh the page with the new article title in the edit list
                writeEditArticleList()

                //refresh the blogs page
                paginate(Database.blogs.articles)
            }
//DELETE FUNCTIONALITY
            if (e.target.id.startsWith("articleDelete_")) {
                // Which article did user click on?
                currentArticle = Database.blogs.articles.find(
                    a => a.id === parseInt(e.target.id.split("_")[1])
                )
                const articleIndex = Database.blogs.articles.findIndex(
                    article => article.id === currentArticle.id
                )
                //remove the selected article from the database
                Database.blogs.articles.splice(articleIndex, 1)

                db.save(Database)

                //refresh the page with the new article title in the edit list
                writeEditArticleList()

                //refresh the blogs page
                paginate(Database.blogs.articles)
            }
    })
}
module.exports = adminListeners