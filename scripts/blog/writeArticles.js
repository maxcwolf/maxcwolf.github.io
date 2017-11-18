function writeArticles(articles, list) {
    // let list = [];    
    for (let i = 0; i < articles.length; i++) {
        blogCombined = `
            <article class='blogPost' id='blog'${articles[i].id}>
                <h2>${articles[i].id}.  ${articles[i].title}</h2>
                <p>By: ${articles[i].author}  |  Published on: ${articles[i].published.slice(0, -18)}</p>
                <p>${articles[i].body}</p>
                <ul class='blogPost__tags'>Tags: `
        //loop to include varying number of tags to each post
        for (j = 0; j < articles[i].tags[0].length; j++) {
            blogCombined += `
            <li>${articles[i].tags[0][j]}</li>`
        }
        blogCombined += `
            </ul>
            </article>`

        list.push(blogCombined);
        }
        //pushes the above text into the array 'list'
}

module.exports = writeArticles