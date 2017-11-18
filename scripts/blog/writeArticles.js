function writeArticles(articles, list) {//the blank list array is passed in here and populated at the end of this function which is passed out into the pagination function
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
        //this is where the list is created and passed to the parent paginate function
        list.push(blogCombined);
        }
}

module.exports = writeArticles