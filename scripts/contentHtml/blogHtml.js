const blogHtml = {
    'id': {
        enumerable: true,
        value: 'blog'
    },
    'html': {
        enumerable: true,        
        value: `<div class=search>
        <label for="search">Search blog posts: </label>
        <input type="search" id="search__id" name="searchName">
    </div>
    <div class="button">
        <button id='button__search' type="submit">Search</button>
    </div>

    <section id="blog_posts">


    </section>

    <nav id='paginator'>
        <input type="button" id="first" onclick="firstPage()" value="<<" />
        <input type="button" id="previous" onclick="previousPage()" value="<" />
        <input type="button" id="next" onclick="nextPage()" value=">" />
        <input type="button" id="last" onclick="lastPage()" value=">>" />
    </nav>

    <footer>
        <a href="#" id="blog_link-admin">Admin</a>
    </footer>`
    }
}

module.exports = blogHtml