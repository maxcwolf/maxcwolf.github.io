const blogHtml = {
    'id': {
        enumerable: true,
        value: 'blogHTML'
    },
    'html': {
        enumerable: true,        
        value: `<div class=search>
        <label for="search">Search blog posts: </label>
        <input type="search" id="search__id" name="searchName">
    </div>
    <!-- <div class="button">
        <button id='button__search' type="submit">Search</button>
    </div> -->

    <section id=blogs>


    </section>

    <nav id='paginator'>
        <input type="button" id="first" onclick="firstPage()" value="<<" />
        <input type="button" id="previous" onclick="previousPage()" value="<" />
        <input type="button" id="next" onclick="nextPage()" value=">" />
        <input type="button" id="last" onclick="lastPage()" value=">>" />
    </nav>

    <footer>
        <div>Admin access password: (it's 'plumbus') <input id='password' type='password'/></div>
        <a href='/admin/blog.html'onclick="javascript:return validatePass()"> Admin Only</a>
    </footer>`
    }
}