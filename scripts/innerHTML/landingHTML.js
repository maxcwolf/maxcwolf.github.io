//creates the landing page's basic static HTML to be inserted

const landingHTML = {
    'id': {
        enumerable: true,
        value: 'landingHTML'
    },
    'html': {
        enumerable: true,
        value: ` 
    <article id="intro" class="article">
        Hi! My name is Max Wolf. I am an aspiring software developer currently enrolled in the Nashville Software School. This is my first attempt at creating a website. I hope you enjoy it!
    </article>
  
    <article id="history" class="article">
        <h3>History</h3>
        Before coming to NSS, I was a Data Manager at a public health research firm specializing in studying ways to change people's health behaviors. This wasn't what I had imagined doing when I got out of college, but I had a knack for staring at a computer all day and trying to make it do what I wanted. I quickly realized that my abilities might be better suited towards programming.
    </article>`
    }
}

//export the HTML object
module.exports = landingHTML