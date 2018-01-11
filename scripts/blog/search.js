const paginate = require("../paginate")
const articleFactory = require("./articleFactory")
const articleWriter = require("./articleWriter")

const searchBlogs = Object.create(null, {
    "init": {
        value: function () {

        // Pull blogs from storage, filter contents (non case sensitive), save to a new localStorage item - reasign the localStorageItem variable so that the writeBlog() function will use the filtered data to construct the blog list -- Switched to keyup to do "live searching"
        document.getElementById("search__id").addEventListener("keyup", event => {

            let searchQuery = document.getElementById("search__id").value.toLowerCase()

            if (searchQuery.length >= 3) {
                let filteredBlogs = articleFactory.cache.filter(blog => {
                    return blog.title.toLowerCase().includes(searchQuery) || blog.body.toLowerCase().includes(searchQuery);
                })
                //if there are 3 characters in the search array, populate the dom with the filtered blog array
                paginate.itemsToPaginate = filteredBlogs;
                paginate.start("blog_paginator", "blog_posts", articleWriter.render)

                if (filteredBlogs.length === 0) {
                    document.getElementById("blog_posts").innerHTML = "<div id='noResults'>No Results</div>";
                }
            //if there are less than 3 characters in the input text box, then display the storedBlogArticles
            } else {
            // let storedBlogArticles =
            paginate.itemsToPaginate = articleFactory.cache;
            paginate.start("blog_paginator", "blog_posts", articleWriter.render)
            }

        })

        }
    }
})


module.exports = searchBlogs