//Parse blogs string from local storage back to an array
const storedBlogs = JSON.parse(localStorage.getItem('BlogDatabase'));

//find element to push the blogs into
const blogDisplayEl = document.getElementById("blogs");

let storedBlogsArticles = storedBlogs.articles;


let list = new Array();
let pageList = new Array();
let currentPage = 1;
let numberPerPage = 5;
let numberOfPages = 0;

let blogCombined = [];


//pass in a parameter 'articles' to allow the search results array can be passed into 
function makeList(articles) {
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
                <li>${articles[i].tags[0][j]}</li>
                `
            }
            blogCombined += `
                </ul>
                </article>`

            list.push(blogCombined);
            }
            //pushes the above text into the array 'list'
}
console.log(list);

numberOfPages = getNumberOfPages();

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function loadList() {
    let begin = ((currentPage - 1) * numberPerPage);
    let end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
}

    
function drawList() {
    document.getElementById("blogs").innerHTML = "";
    for (r = 0; r < pageList.length; r++) {
        document.getElementById("blogs").innerHTML += pageList[r] + "<br/>";
    }
}

function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}
//
function load(searched) {
    console.log(searched);
    if(searched.bubbles === false) {
        makeList(storedBlogsArticles);
        loadList();
    } else {
        blogsCombined = [];
        list = [];
        makeList(searched);
        loadList();
    }
}
    
window.onload = load;