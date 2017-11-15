    
    let editMode = false
    let currentArticle = null
    
    const listArticleTitles = () => {
        let articleTitleList = "";

        // Build title + edit hyperlink for each article
        BlogDatabase.articles.forEach(
            article => {
                articleTitleList += `
                    <article id="article_${article.id}" class="article--tiny">
                        <span class="article__title">${article.title}</span>
                        <a href="#" class="article__link" id="articleEdit_${article.id}">Edit</a>
                    </article>
                `
            }
        )

        // Add to DOM
        document.getElementById("articleList").innerHTML = articleTitleList
    }

    // When user clicks on any edit hyperlink
    document.getElementById("articleList").addEventListener(
        "click", e => {

            if (e.target.id.startsWith("articleEdit_")) {
                // Which article did user click on?
                currentArticle = BlogDatabase.articles.find(
                    a => a.id === parseInt(e.target.id.split("_")[1])
                )

                // Put values in the article form
                document.getElementById("titleID").value = currentArticle.title;
                document.getElementById("blogID").value = currentArticle.body;
                document.getElementById("authorID").value = currentArticle.author;
                document.getElementById("tagsID").value = currentArticle.tags;
                

                editMode = true
            }
        }
    )

    listArticleTitles()


    if (editMode = true) {
        document.getElementById('submitButt').addEventListener(
            'click', e => {
                currentArticle.title = document.getElementById("titleID").value;
                currentArticle.body = document.getElementById("blogID").value;
                currentArticle.author = document.getElementById("authorID").value;
                currentArticle.tags = document.getElementById("tagsID").value;
            }
        )
    }