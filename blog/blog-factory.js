// ID GENERATOR
const blogIdGenerator = function* () {
    let uniqueId = 1;

    while (true) {
        yield uniqueId;
        uniqueId += 1;
    }
}

// 1st instance of generator
const blogIdFactory = blogIdGenerator();

//empty blog array
const blogArr = [];

// Factory function that returns a blog article object
const blogObjectFactory = function (title, entry, ...tags) {
    blogArr.push(Object.create(null, {
        "id": { value: blogIdFactory.next().value, enumerable: true },
        "title": { value: title, enumerable: true },
        "body": { value: entry, enumerable: true },
        "tags": { value: tags, enumerable: true },
        "published": { value: Date.now(), enumerable: true }
    }))
}

// Blog Articles...
const threeWeeksIn = blogObjectFactory(
    'Three Weeks In', 
    "It's been three weeks of fun and frustration. When you figure something out that you've been stuck on, it gives you this addictive rush to keep coding. Then, there are the other times when you get stuck and can't get unstuck. Frustration and despair kick in. Until you finally ask someone about it and feel like a jabroni for not figuring it out sooner. On to the next week.", 
    'fun', 'frustration', 'jabroni', 'NSS'
);

const testBlog1 = blogObjectFactory(
    'Test Title',
    'This is a test post',
    'test', 'delete', 'fake'
);


//push blogs to local storage
let blogString = JSON.stringify(blogArr);
localStorage.setItem('blogs', blogString);
