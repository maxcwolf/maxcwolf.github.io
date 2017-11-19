//creates the landing page's basic static HTML to be inserted

const homeHtml = {
    'id': {
        enumerable: true,
        value: 'home'
    },
    'html': {
        enumerable: true,
        value: ` 
    <article id="home-content">
        <img id="wolfimg" src='./pics/wolf.jpg' alt=wolf>
        <p>Hi! My name is Max Wolf. I am an aspiring software developer currently enrolled in the Nashville Software School. This is my first attempt at creating a website. I hope you enjoy it!</p>
    </article>`
    }
}

//export the HTML object
module.exports = homeHtml