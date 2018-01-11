const articleWriter = Object.create(null, {
    "render": {
        value: function (articles, list) {
            articles.forEach(article => {
                blogCombined = `
                    <article class='blogPost' id='blog!${article.id}'>
                        <h2>${article.title}</h2>
                        <p class='blogPost__authDate'>Posted by: ${article.author}  |  Published on: ${article.published.slice(0, -18)}</p>
                        <p>${article.body}</p>
                        <ul class='blogPost__tags'>`

                //loop to include varying number of tags to each post
                article.tags.forEach(tag => {
                    blogCombined += `<li>${tag}</li>`
                })

                blogCombined += `
                </ul>
                </article>`

                //this is where the list is created and passed to the parent paginate function
                list.push(blogCombined);
            })

        }
    }
})

module.exports = articleWriter