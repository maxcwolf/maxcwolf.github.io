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
        <div>
            <p class='p1'>Hi! I'm Max Wolf.</p>
            <p class='p2'>I am an aspiring software developer currently enrolled in the Nashville Software School. This is my first attempt at creating a single page web application. I hope you enjoy it!</p>
        </div>
    </article>`
    }
}

//export the HTML object
module.exports = homeHtml