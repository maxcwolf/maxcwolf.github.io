// //Use clear button to revert back to full list of blog entries
// document.getElementById("button__search").addEventListener("click", event => {
//     document.getElementById("search__id").value = "Search Field";
//     produceBlog()
// })

// Pull blogs from storage, filter contents (non case sensitive), save to a new localStorage item - reasign the localStorageItem variable so that the writeBlog() function will use the filtered data to construct the blog list -- Switched to keyup to do "live searching"
document.getElementById("button__search").addEventListener("click", event => {
    let searchQuery = document.getElementById("search__id").value.toLowerCase()
        if (searchQuery.length >= 3) {

            let filteredBlogArray = storedBlogs.articles.filter (blog => {
                return blog.title.toLowerCase().includes(searchQuery) || blog.body.toLowerCase().includes(searchQuery)
            })
            
            console.log(filteredBlogArray);
                        
            if (filteredBlogArray.length === 0) {
                document.getElementById("blogs").innerHTML = "No Results"
            } else {
                produceBlog(event)
            }
            
        } else {
            produceBlog(event, filteredBlogArray.articles)
        }

})

