function writeArticles(articles, list) {//the blank list array is passed in here and populated at the end of this function which is passed out into the pagination function   
    articles.forEach(article => {
        blogCombined = `
            <article class='blogPost' id='blog'${article.id}>
                <h2>${article.id}.  ${article.title}</h2>
                <p>By: ${article.author}  |  Published on: ${article.published.slice(0, -18)}</p>
                <p>${article.body}</p>
                <ul class='blogPost__tags'>Tags: `
        //loop to include varying number of tags to each post
        article.tags.forEach(tag => {
            blogCombined += `
            <li>${tag}</li>`
//ERROR? in the debugger tags is seen as an array with multiple values, however when looped
//       thru, it only writes one long single list item?!            
        })
        blogCombined += `
            </ul>
            </article>`
        //this is where the list is created and passed to the parent paginate function
        list.push(blogCombined);
        })
}

module.exports = writeArticles