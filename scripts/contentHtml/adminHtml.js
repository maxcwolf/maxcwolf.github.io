const adminHtml = {
    'id': {
        enumerable: true,
        value: 'admin'
    },
    'html': {
        enumerable: true,        
        value: `
        <div class='blogForm-container'>
            <form id='blogForm'>
                <h2>Make a Blog Post</h2>
                <fieldset>
                    <input type="text" id="authorID" name="authorName" placeholder="Your name">
                </fieldset>
                <fieldset>
                    <input type="text" id="titleID" name="titleName" placeholder="Blog title">
                </fieldset>
                <fieldset>
                    <input type="text" id="tagsID" name="tagsName" placeholder="Tag your blog">
                </fieldset>
                <fieldset>
                    <textarea id="blogID" name="blogName" placeholder="Type your blog here..."></textarea>
                </fieldset> 
            </form>

            <div class="button">
                <button id='submitButt' type="submit">Post your blog article</button>
            </div>
        </div>

        <section id='articles'>
            <h2>Your Articles</h2>
            
            <div id='articleList'>

            </div>
        </section>`
    }
}

module.exports = adminHtml