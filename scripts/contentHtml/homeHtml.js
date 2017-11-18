//creates the landing page's basic static HTML to be inserted

const homeHtml = {
    'id': {
        enumerable: true,
        value: 'home'
    },
    'html': {
        enumerable: true,
        value: ` 
    <article id="intro" class="article">
        Hi! My name is Max Wolf. I am an aspiring software developer currently enrolled in the Nashville Software School. This is my first attempt at creating a website. I hope you enjoy it!
    </article>`
    }
}

//export the HTML object
module.exports = homeHtml