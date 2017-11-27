const adminWriter = Object.create(null, {
    "render": {
        value: function (articles) {
            let articleTitleList = "";

            // articles.forEach(article => { //using a for each give the articles the actual id which doesnt work with the edit functionality at the moment

        //Build title + edit hyperlink for each article
        for (let key in articles) {
            // let currentArticle = articles[key]

            articleTitleList += `
            <article id="article!${key}" class="article--tiny">
                <span class="article__title">${articles[key].title}</span>
                <a href="#" class="article__link" id="articleEdit!${key}">Edit</a>
                <a href="#" class="article__link" id="articleDelete!${articles[key].id}">Delete</a>
            </article>
            `
        }

        // Add to DOM
        document.getElementById("articleList").innerHTML = articleTitleList
        }
    }
})

module.exports = adminWriter