//Parse blogs string from local storage back to an array
const storedBlogs = JSON.parse(localStorage.getItem('BlogDatabase'));

//Getting Blog element in blog.html
const blogElement = document.getElementById('blogs');

console.log(storedBlogs);

//creating blank variable to be populated via loops and insert into the dom later
let blogCombined = '';

//iterating over the storedBlogs.articles arrays and writing the innerhtml to blogCombined
for (i = 0; i < storedBlogs.articles.length; i++) {
    blogCombined += `
        <article class='blogPost' id='blog'${storedBlogs.articles[i].id}>
            <h2>${storedBlogs.articles[i].id}.  ${storedBlogs.articles[i].title}</h2>
            <p>${storedBlogs.articles[i].body}</p>
            <ul class='blogPost__tags'>`
    //loop to include varying number of tags to each post
    for (j = 0; j < storedBlogs.articles[i].tags.length; j++) {
        blogCombined += `
        <li>${storedBlogs.articles[i].tags[j]}</li>
        `
    }
    blogCombined += `
        </ul>
        <p>${storedBlogs.articles[i].published}</p>
        </article>`
}
blogElement.innerHTML += blogCombined;