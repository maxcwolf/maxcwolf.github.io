
//Adds event listener to the admin button on the blog page which brings you to the admin page
function blogListeners (authenticated) {
    debugger
    //remove previous event handler
    $("#blog_link-admin").off("click")

    if (authenticated === true) {
        document.getElementById("blog_link-admin").addEventListener("click", event => {
            const sectionEl = document.getElementById("admin")

            //make all sections hidden
            Array.from(document.getElementsByClassName("mainSection"))
            .forEach(
                section =>
                    section.classList.add("hidden")
            )

            // WHEN CLICKED: remove the hidden class
            sectionEl.classList.remove("hidden")
            console.log("CLICKED")
        })
    } else if (authenticated === false) {
        document.getElementById("blog_link-admin").addEventListener("click", event => {
            window.alert("ACCESS DENIED: You do not have access to the admin page")
        })
    }
}

module.exports = blogListeners