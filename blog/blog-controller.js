//Parse blogs string from local storage back to an array
const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

//Getting Blog element in blog.html
const blogElement = document.getElementById('blogs');

//creating blank variable to be populated via loops and insert into the dom later
let blogCombined = '';

//iterating over the storedBlogs array and writing the innerhtml to blogCombined
for (i = 0; i < storedBlogs.length; i++) {
    blogCombined += `
        <div class='blogPost' id='blog'${storedBlogs[i].id}>
            <h2>${storedBlogs[i].id}.  ${storedBlogs[i].title}</h2>
            <p>${storedBlogs[i].body}</p>
            <ul class='tags'>`
    //loop to include varying number of tags to each post
    for (j = 0; j < storedBlogs[i].tags.length; j++) {
        blogCombined += `
        <li>${storedBlogs[i].tags[j]}</li>
        `
    }
    blogCombined += `</ul></div>`
}
console.log(storedBlogs[0].tags);
blogElement.innerHTML += blogCombined;