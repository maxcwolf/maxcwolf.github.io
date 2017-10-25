//Parse blogs string from local storage back to an array
const storedBlogs = JSON.parse(localStorage.getItem('BlogDatabase'));

const totalItems = storedBlogs.articles.length;
const itemsPerPage = 5;
const numberOfPages = Math.ceil(totalItems / itemsPerPage);
const paginationEl = document.getElementById("paginator");
const blogDisplayEl = document.getElementById("blogs");

// DOM string for the pagination links in the footer
let paginationString = "<ul><a id='previous' href='#'>&lt;</a>"
for (var i = 0; i < numberOfPages; i++) {
    paginationString += ` <li><a class="blogPage page-${i+1}" href="#">${i+1}</a></li>`
}
paginationString += " <a id='next' class='page-2' href='#'>&gt;</a></ul>"


// Update the DOM with the unordered list we just built
paginationEl.innerHTML = paginationString;

// Store references to the next and previous arrows we just added
const previousEl = document.getElementById("previous");
const nextEl = document.getElementById("next");


//// ********* GIANT FUNCTION ATTACHED TO PAGINATION LINKS ********* ////
function produceBlog (event) {
    // Clear the blog posts first before displaying the new ones
    blogDisplayEl.innerHTML = "";

    // stores the displayed blogs
    let blogCombined = '';

    // Convert DOMTokenList to Array
    const classes = event.target.classList;
    const classArray = Array.from(classes);

    // Find the class we want that match pattern "page-n"
    const targetClass = classArray.find(classs => {
        if (classs.startsWith("page-")) return classs
    });

    // // Split the class into an array on the dash
    // const pageNumberArray = targetClass.split("-");

    // // Get the actual page number ["page", "1"]
    // const actualPageNumber = pageNumberArray[1];

    // // Convert the string into an integer
    // const integerPageNumber = parseInt(actualPageNumber);

    //IS THIS IS THE SAME AS THE CODE ABOVE TO line 43//
    const pageNumber = parseInt(
        Array.from(event.target.classList)
        .find(classs => {
            if (classs.startsWith("page-")) return classs
        })
        .split("-")[1]
    )

    // Change the class name of the previous arrow
    if ((pageNumber - 1) === 0) {
        previousEl.style.display = "none"
    } else {
        previousEl.style.display = "inline"
        previousEl.className = `page-${pageNumber - 1}`
    }

    // Change the class name of the next arrow
    if ((pageNumber + 1) > numberOfPages) {
        nextEl.style.display = "none"
    } else {
        nextEl.style.display = "inline"
        nextEl.className = `page-${pageNumber + 1}`
    }

    // Determine which items to display by slicing the array
    const itemsToDisplay = storedBlogs.articles.slice(
        (pageNumber - 1) * itemsPerPage, 
        pageNumber * itemsPerPage
    )

    console.log(itemsToDisplay);

    // Display a <section> representation of each data object
    for (let i = 0; i < itemsToDisplay.length; i++) {
        let currentBlog = itemsToDisplay[i];
        
        // for (i = 0; i < storedBlogs.articles.length; i++) {
            blogCombined += `
                <article class='blogPost' id='blog'${itemsToDisplay[i].id}>
                    <h2>${itemsToDisplay[i].id}.  ${itemsToDisplay[i].title}</h2>
                    <p>${itemsToDisplay[i].body}</p>
                    <ul class='blogPost__tags'>`
            //loop to include varying number of tags to each post
            for (j = 0; j < itemsToDisplay[i].tags.length; j++) {
                blogCombined += `
                <li>${itemsToDisplay[i].tags[j]}</li>
                `
            }
            blogCombined += `
                </ul>
                <p>${itemsToDisplay[i].published}</p>
                </article>`
            }
            blogDisplayEl.innerHTML += blogCombined;
    }


// Get the array of pagination anchor tags we added to the DOM
const blogLinks = document.getElementsByClassName("blogPage")

// Add event listeners to each <a> element in the pagination
for (let j = 0; j < blogLinks.length; j++) {
    let thisBlogEl = blogLinks[j];
    thisBlogEl.addEventListener("click", produceBlog, false);
}

//not sure what this does....
produceBlog({
    "target": {
        "classList": ["page-1"]
    }
})

previousEl.addEventListener("click", produceBlog);
nextEl.addEventListener("click", produceBlog);




