// Get the database from local storage, or empty object if null
const BlogDatabase = JSON.parse(
    localStorage.getItem("BlogDatabase")
) || {}

// Create articles key if it doesn't exist
BlogDatabase.articles = BlogDatabase.articles || [];

// Flip the order of articles contained in the blog database (descending order)
BlogDatabase.articles.sort((previous, next) => next.id - previous.id);

// ID GENERATOR
const blogIdGenerator = function* (last) {
    let uniqueId = 1;
    //makes sure that IDs are added to the 'last' id created
    while (true) {
        yield last + uniqueId;
        uniqueId++;
    }
}

//since line 10 flips the database, find the first article entry, assign to lastId || if there are none, asign the id as 0 in lastId
const lastId = BlogDatabase.articles[0] || { id: 0 };
const articleIdGenerator = blogIdGenerator(lastId.id);


// Factory function that returns a blog article object
const blogArticleFactory = function (title, body, ...tags) {    
    return Object.create(null, {
        "id": { value: articleIdGenerator.next().value, enumerable: true },
        "title": { value: title, enumerable: true },
        "body": { value: body, enumerable: true },
        "tags": { value: tags, enumerable: true },
        "published": { value: Date(), enumerable: true }
    })
    
}

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




//create function that creates a new article object using the articlefactory and stores it in a newArticle variable...
function storeNewBlog() {
    const newArticle = blogArticleFactory(
        document.getElementById('titleID').value,
        document.getElementById('blogID').value,
        document.getElementById('tagsID').value
    )
    // ...adds new article to array
    BlogDatabase.articles.push(newArticle);
    
    //re-sort database (used twice, need to create function)
    BlogDatabase.articles.sort((previous, next) => next.id - previous.id);
    
    //serialize and store database
    localStorage.setItem("BlogDatabase", JSON.stringify(BlogDatabase));

    //reload the page
    location.reload();
}

//get element ids of submit button and run the storeNewBlog function
document.getElementById('submitButt').addEventListener('click', storeNewBlog);
