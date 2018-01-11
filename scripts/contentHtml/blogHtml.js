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
    <div id='blog_container'>
        <h1 id='blog_title'>The Blog</h1>

        <section id="blog_posts">


        </section>
        <div>
            <a href="#" id="blog_link-admin">Admin</a>
        </div>
        <nav id='blog_paginator'>
            <input type="button" id="first" value="<<" />
            <input type="button" id="previous" value="<" />
            <input type="button" id="next" value=">" />
            <input type="button" id="last" value=">>" />
        </nav>
    </div>`
    }
}

module.exports = blogHtml