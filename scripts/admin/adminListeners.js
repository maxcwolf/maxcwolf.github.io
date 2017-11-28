const articleController = require("../blog/articleController")
const articleFactory = require("../blog/articleFactory")
const adminController = require("./adminController")

const adminListeners = () => {
    let articles = null

    return Object.create(null, {
        "articlesToList": {
            set: (newItems) => articles = newItems
        },
        "start": {
            value: () => {

        //set edit mode and current article within the scoope of this function
        let editMode = false
        let currentArticle = null


        document.getElementById("admin").addEventListener(
            "click", e => {
//POPULATE THE FORM WITH EDITABLE ARTICLE
                if (e.target.id.startsWith("articleEdit!")) {
                    // Which article did user click on?

                    const currentArticle = e.target.id.split("!").pop();

                        // Put values in the article form
                        document.getElementById("titleID").value = articles[currentArticle].title;
                        document.getElementById("blogID").value = articles[currentArticle].body;
                        document.getElementById("authorID").value = articles[currentArticle].author;
                        document.getElementById("tagsID").value = articles[currentArticle].tags;
                        document.getElementById("editID").value = articles[currentArticle].id; //add hidden value containing the long id of each article for edit functionality

                    editMode = true
                }
//SAVE FUNCTIONALITY
                else if (e.target.id === 'submitButt' && editMode === false) {
                    console.log('EDIT MODE = FALSE')

                    const newArticle = {
                        author: $("input[name='authorName']").val(),
                        body: $("textarea[name='blogName']").val(),
                        published: Date(),
                        tags: $("input[name='tagsName']").val().split(","),
                        title: $("input[name='titleName']").val()
                    }

                    articleFactory.add(newArticle)

                    //reset the form to blank
                    document.forms["blogForm"].reset();

                    //refresh the page with the new article title in the edit list
                    articleController.refresh()

                    //refresh the blogs page with the new article
                    articleController.init()

                    // // ...adds new article to array
                    // articles.push(newArticle);

                    // // Flip the order of articles contained in the blog database (descending order)
                    // articles.sort((previous, next) => next.id - previous.id);


                }

//EDIT FUNCTIONALITY
                else if (e.target.id === 'submitButt' && editMode === true) {
                    console.log("EDIT MODE should = TRUE... it is actually", editMode)

                    const editedArticle = {
                        "id": $("input[name='editName']").val(),
                        "article": {
                            author: $("input[name='authorName']").val(),
                            body: $("textarea[name='blogName']").val(),
                            published: Date(),
                            tags: $("input[name='tagsName']").val().split(","),
                            title: $("input[name='titleName']").val()
                        }
                    }

                    articleFactory.replace(editedArticle.article, editedArticle.id)

                    //reset the form to blank
                    document.forms["blogForm"].reset();

                    //refresh the page with the new article title in the edit list
                    articleController.refresh()

                    //refresh the blogs page with the new article
                    articleController.init()

                    editMode = false

                }
//DELETE FUNCTIONALITY
                if (e.target.id.startsWith("articleDelete!")) {

                    // Which article did user click on? > take the id stored in the element id and store it as a variable
                    const articleToDelete = e.target.id.split("!")[1]

                    //get the element to remove
                    // const elementToDelete = e.target

                    //remove article from firebase using the object's key (stored as the id in the arrayified object)
                    articleFactory.remove(articleToDelete)

                    //remove the article from the article list in the DOM
                    //DOESNT WORK  elementToDelete.remove()

                    //refresh the page with the new article title in the edit list
                    articleController.refresh()

                    //refresh the blogs page
                    articleController.init()
                }
            })
            }
        }
    })
}
module.exports = adminListeners()