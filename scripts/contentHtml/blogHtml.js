const blogHtml = {
    'id': {
        enumerable: true,
        value: 'blog'
    },
    'html': {
        enumerable: true,        
        value: `<div class=search>
        <input type="search" id="search__id" name="searchName" placeholder="Search blog posts...">
    </div>

    <h1 id='blog_title'>The Blog</h1>

    <section id="blog_posts">


    </section>

    <nav id='paginator'>
        <input type="button" id="first" value="<<" />
        <input type="button" id="previous" value="<" />
        <input type="button" id="next" value=">" />
        <input type="button" id="last" value=">>" />
    </nav>

    <footer>
        <a href="#" id="blog_link-admin">Admin</a>
    </footer>`
    }
}

module.exports = blogHtml