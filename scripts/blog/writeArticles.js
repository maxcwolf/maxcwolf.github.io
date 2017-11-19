function writeArticles(articles, list) {//the blank list array is passed in here and populated at the end of this function which is passed out into the pagination function   
    articles.forEach(article => {
        blogCombined = `
            <article class='blogPost' id='blog'${article.id}>
                <h2>${article.title}</h2>
                <p>Posted by: ${article.author}  |  Published on: ${article.published.slice(0, -18)}</p>
                <p>${article.body}</p>
                <ul class='blogPost__tags'>`
        //loop to include varying number of tags to each post
        article.tags.forEach(tagArr => {
            tagArr.forEach(tag => {
                console.log(tag)
                blogCombined += `<li>${tag}</li>`
            })
        })
        blogCombined += `
            </ul>
            </article>`
        //this is where the list is created and passed to the parent paginate function
        list.push(blogCombined);
        })
}

module.exports = writeArticles