const firebase = require("firebase")
const observer = require("./observer")

const config = {
    apiKey: "AIzaSyAKp6RKDz8MaP0wNDAbF8ag9BvIpeQHL-8",
    authDomain: "personal-site-3a80d.firebaseapp.com",
    databaseURL: "https://personal-site-3a80d.firebaseio.com",
    projectId: "personal-site-3a80d",
    storageBucket: "personal-site-3a80d.appspot.com",
    messagingSenderId: "838013217381"
};

const auth = Object.create(null, {
    "activeUser": {
        value: null,
        writable: true
    },
    "init": {
        value: function () {
            firebase.initializeApp(config)

            //make the admin button give alert by default
            document.getElementById("blog_link-admin").addEventListener("click", event => {
                window.alert("ACCESS DENIED: You do not have access to the admin page")
            })

            // Get the modal
            const modal = document.getElementById('login__modal');

            $(".login__butt").on("click", e => {

                // Get the <span> element that closes the modal
                const span = document.getElementsByClassName("close")[0];

                // When the user clicks the button, open the modal
                modal.style.display = "block";

                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            })

            $("#login__submit").on("click", e => {

                // Validate login information
                this.validate(
                    $("#login__email").val(),
                    $("#login__password").val()
                )

                // Clear the form
                $("#login__email").val("")
                $("#login__password").val("")

                //close the modal
                modal.style.display = "none"

                // Set up authentication observer
                observer.init(this)
            })
        }
    },
    "validate": {
        value: function (email, password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    const errorCode = error.code
                    const errorMessage = error.message

                    window.alert("Email or password is invalid")
                })
        }
    },
    "logout": {
        value: function () {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                //change the class of the logout button back to login
                $('.logout__butt').removeClass('logout__butt').addClass('login__butt');
            }).catch(function (error) {
                // An error happened.
            });
        }
    }
})

module.exports = auth
