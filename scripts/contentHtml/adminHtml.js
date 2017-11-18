const adminHtml = {
    'id': {
        enumerable: true,
        value: 'admin'
    },
    'html': {
        enumerable: true,        
        value: `
        <form id='blogForm'>
            <h2>Make a Blog Post</h2>
            <div>
                <label for="title">Author: </label>
                <input type="text" id="authorID" name="authorName">
            </div>
            <div>
                <label for="title">Title: </label>
                <input type="text" id="titleID" name="titleName">
            </div>
            <div>
                <label for="tags">Tag your blog:</label>
                <input type-"text" id="tagsID" name="tagsName">
            </div>
            <div>
                <label for="blog">Write your blog:</label>
                <textarea id="blogID" name="blogName"></textarea>
            </div> 
        </form>

        <div class="button">
            <button id='submitButt' type="submit">Post your blog article</button>
        </div>

        <div id='articleList'>
            <h3>Edit your articles:</h3>

        </div>`
    }
}

module.exports = adminHtml