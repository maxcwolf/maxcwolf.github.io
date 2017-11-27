db = require('../Database')
idGenerator = require('../idGenerator')

// Factory function that returns a blog article object
const blogArticleFactory = function (id, author, title, body, ...tags) {
    Database = db.load()
    Database.blogs = Database.blogs || {}
    // Create articles key if it doesn't exist
    Database.blogs.articles = Database.blogs.articles || [];
    
    // Flip the order of articles contained in the blog database (descending order)
    Database.blogs.articles.sort((previous, next) => next.id - previous.id);

    //since the line above flips the database, find the first article entry, assign to lastId || if there are none, asign the id as 0 in lastId
    const lastId = Database.blogs.articles[0] || { id: 0 };
    //create instance of the idGenerator
    const articleIdGenerator = idGenerator(lastId.id);
    return Object.create(null, {
        "id": {
            value:(id === null) ? articleIdGenerator.next().value : id,
            enumerable: true
        },
        "author": { value: author, enumerable: true},
        "title": { value: title, enumerable: true },
        "body": { value: body, enumerable: true },
        "tags": { value: tags, enumerable: true },
        "published": { value: Date(), enumerable: true }
    })
    
}

module.exports = blogArticleFactory

// //********* ARCHIVE OF OLD BLOG ARTICLES TO ENTER LATER *******//
// const threeWeeksIn = blogObjectFactory(
//     'Three Weeks In', 
//     "It's been three weeks of fun and frustration. When you figure something out that you've been stuck on, it gives you this addictive rush to keep coding. Then, there are the other times when you get stuck and can't get unstuck. Frustration and despair kick in. Until you finally ask someone about it and feel like a jabroni for not figuring it out sooner. On to the next week.", 
//     'fun', 'frustration', 'jabroni', 'NSS'
// );


// const makingBlog = blogObjectFactory(
//     'Making a Blog Page',
//     "Making a this blog page was easy, but adding features to it is becoming extremely difficult!  I hope I can figure out how to add new blog posts using the form at the bottom of the page. I'm almost there, but for some reason the entered data doesnt get properly stored in the local storage. Hopefully I can figure it out when I get into class today.",
//     'making a blog', 'troubleshooting'
// )
