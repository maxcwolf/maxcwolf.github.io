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
    
    //making edit functionality not work at default
    let editMode = false;
    //pass in a parameter 'articles' to allow the search results array can be passed into 
        
    
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
    
    //maybe turn these functions into addevent listeners that are added when the funtion runs
    
    document.getElementById("paginator").addEventListener("click", event => {
        //getNumberOfPages need to run here or else the number of pages is still equal to 0 when the disabling of buttons is calculated
        numberOfPages = getNumberOfPages();
        //depending on which button is clicked, 
        if (event.target.id === "next") {
                currentPage += 1;
                loadList();
        } else if (event.target.id === "previous") {
                currentPage -= 1;
                loadList();
        } else if (event.target.id === "first"){
                currentPage = 1;
                loadList();
        } else if (event.target.id === "last") {
                currentPage = numberOfPages;
                loadList();
        }

    })
    
        
    function drawList() {
        blogDisplayEl.innerHTML = "";
        for (i = 0; i < pageList.length; i++) {
            blogDisplayEl.innerHTML += pageList[i] + "<br/>"; //doc.gebi('blogs') needs to be a parameter
        }
    }
    
    //logic to disable page buttons depending on which page you are currently on
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