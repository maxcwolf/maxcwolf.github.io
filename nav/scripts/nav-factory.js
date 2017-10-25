//nav bar object
const homeNav = {
    'name' : 'Home',
    'link' : "/index.html"
}

const bioNav = {
    'name' : 'Bio',
    'link' : "/bio/bio.html"
}

const historyNav = {
    'name' : 'History',
    'link' : "/history/history.html"
}

const blogNav = {
    'name' : 'Blog',
    'link' : "/blog/blog.html"
}

const contactNav = {
    'name' : 'Contact',
    'link' : "/contact/contact.html"
}

//create blank nav bar array
const navBar = [];

//create array of objects into navBar
navBar.push(homeNav, bioNav, historyNav, blogNav, contactNav);

//pushing to local storage
const navBarString = JSON.stringify(navBar);
localStorage.setItem("navBar", navBarString);