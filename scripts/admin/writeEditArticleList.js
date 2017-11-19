const writeEditArticleList = () => {
    let articleTitleList = "";

    Database = db.load()


    // Build title + edit hyperlink for each article
    Database.blogs.articles.forEach(
        article => {
            articleTitleList += `
                <article id="article_${article.id}" class="article--tiny">
                    <span class="article__title">${article.title}</span>
                    <a href="#" class="article__link" id="articleEdit_${article.id}">Edit</a>
                    <a href="#" class="article__link" id="articleDelete_${article.id}">Delete</a>                    
                </article>
            `
        }
    )

    // Add to DOM
    document.getElementById("articleList").innerHTML += articleTitleList
}

module.exports = writeEditArticleList