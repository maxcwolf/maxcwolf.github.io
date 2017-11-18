
function addAdminListener () {
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
}

module.exports = addAdminListener