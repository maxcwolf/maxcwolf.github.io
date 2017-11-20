const navBar = require("./navFactory")

function navDomWriter() {
    //get the navBar element in index.html
    const navEl = document.getElementById("navBar");

    // const navFootEl = document.getElementById("footer-navBar");
    

    //iterate through nav array and write each nav to the navBar element in the DOM
    navBar.forEach(nav => {

        // creating list items
        const newLi = document.createElement("li")
        
            // give the new list items a class name
            newLi.className = "navBar_link"
        
            // create an links for each list item
            const newLink = document.createElement("a")

            // give a blank href hash to each link
            newLink.href = "#"

            //give a class to each link which appends the name to the end of the list items' class name
            newLink.className = `navBar_link-${nav.name.toLowerCase()}`

            //insert the name of each navBar element into the html text of each link
            newLink.appendChild(document.createTextNode(nav.name))
        
            // add event listener to each link when clicked
            newLink.addEventListener("click", event => {
                const sectionName = event.target.className.split("-")[1]
                const sectionEl = document.getElementById(sectionName)
        
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
            
            // adding the finished links to each list item
            newLi.appendChild(newLink)
        
            // adding the finished list items to the navbar element
            navEl.appendChild(newLi);
// //adds links to footer (removed due to the fact that event listeners are removed when cloned and the section name which is stored on the end of each link's id need to be looped through in the way done above)
//             //CLONES the newLi which removes the event listeners
//             const clonedNewEl = newLi.cloneNode(true)
//             console.log(clonedNewEl)
//             // debugger
//             // adding the finished list items to the footer nav element
//             navFootEl.appendChild(clonedNode)
            
    })
}

//export the navDomWriter for use in the populateDOM function
module.exports = navDomWriter