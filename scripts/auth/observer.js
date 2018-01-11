const firebase = require("firebase")
const blogListeners = require("../blog/blogEventListeners")

const observer = Object.create(null, {
    "init": {
        value: function (auth) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    auth.activeUser = user
                    //adds listener to admin button on the blog page to show the admin page
                    blogListeners(true)
                    //change the class of the login button to logout
                    $('.login__butt').removeClass('login__butt').addClass('logout__butt');
                    //change the text of the login button
                    $('.logout__butt').empty().text('Logout')
                } else {
                    auth.activeUser = null
                    //the admin button on the blog page send an access denied alert
                    blogListeners(false)
                }
            })
        }
    }
})

module.exports = observer