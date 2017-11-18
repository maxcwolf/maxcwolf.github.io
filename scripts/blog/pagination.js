const writeArticles = require('./writeArticles')

function paginate(articleArray) {
    //find element to push the blogs into
    const blogDisplayEl = document.getElementById("blog_posts");
    const blogEl = document.getElementById("blogs");
    
    let list = [];
    let pageList = [];
    let currentPage = 1;
    let numberPerPage = 5;
    let numberOfPages = 0;
    
    let blogCombined = [];
    //making edit functionality not work at default
    let editMode = false;
    //pass in a parameter 'articles' to allow the search results array can be passed into 
        
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
        blogDisplayEl.innerHTML = "";
        for (i = 0; i < pageList.length; i++) {
            blogDisplayEl.innerHTML += pageList[i] + "<br/>"; //doc.gebi('blogs') needs to be a parameter
        }
    }
    
    function check() {
        document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
        document.getElementById("previous").disabled = currentPage == 1 ? true : false;
        document.getElementById("first").disabled = currentPage == 1 ? true : false;
        document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
    }

    // list = [];
    writeArticles(articleArray, list);
    loadList();

}

module.exports = paginate