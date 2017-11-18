const paginate = require("./pagination")

function searchBlogs() {
    //load the database
    const Database = db.load()
    
    Database.blogs = Database.blogs || {}
    
    let storedBlogsArticles = Database.blogs.articles;

    paginate(storedBlogsArticles)

    // Pull blogs from storage, filter contents (non case sensitive), save to a new localStorage item - reasign the localStorageItem variable so that the writeBlog() function will use the filtered data to construct the blog list -- Switched to keyup to do "live searching"
    document.getElementById("search__id").addEventListener("keyup", event => {
        let searchQuery = document.getElementById("search__id").value.toLowerCase()
            if (searchQuery.length >= 3) {
                let filteredBlogArray = storedBlogsArticles.filter (blog => {
                    return blog.title.toLowerCase().includes(searchQuery) || blog.body.toLowerCase().includes(searchQuery);
                })
                //if there are 3 characters in the search array, populate the dom with the filtered blog array
                paginate(filteredBlogArray);
                            
                if (filteredBlogArray.length === 0) {
                    document.getElementById("blogs").innerHTML = `<div>No Results</div>`;
                }    
            //if there are less than 3 characters in the input text box, then display the storedBlogArticles    
            } else {
                let storedBlogArticles = 
                paginate(storedBlogsArticles);
            }
    
    })

}

module.exports = searchBlogs

// document.getElementById("button__search").addEventListener("click", paginate); 