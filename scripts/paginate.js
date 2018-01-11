

const paginate = () => {
    let items = null

    return Object.create(null, {
        "itemsToPaginate": {
            set: (newItems) => items = newItems
        },
        "start": {
            value: (paginatorId, outputId, writer) => {
                if (!items || !paginatorId || !outputId) {
                    throw "You have not defined a required parameter for pagination to work!!"
                }

                let list = [];
                let pageList = [];
                let currentPage = 1;
                let numberPerPage = 5;
                let numberOfPages = 0;
                let outputEl = document.getElementById(outputId);
                let paginatorEl = document.getElementById(paginatorId)

                function getNumberOfPages() {
                    return Math.ceil(list.length / numberPerPage);
                }

                function loadList() {
                    let begin = ((currentPage - 1) * numberPerPage);
                    let end = begin + numberPerPage;

                    pageList = list.slice(begin, end);
                    drawList();
                    check();
                }

                paginatorEl.addEventListener("click", event => {
                    //getNumberOfPages need to run here or else the number of pages is still equal to 0 when the disabling of buttons is calculated
                    numberOfPages = getNumberOfPages();
                    //depending on which button is clicked,
                    if (event.target.id === "next") {
                            currentPage += 1;
                            loadList();
                    } else if (event.target.id === "previous") {
                            currentPage -= 1;
                            loadList();
                    } else if (event.target.id === "first"){
                            currentPage = 1;
                            loadList();
                    } else if (event.target.id === "last") {
                            currentPage = numberOfPages;
                            loadList();
                    }

                })

                //***NEED TO PASS IN DISPLAY ELEMENT TO MAKE PAGINATION UNIVERSAL***//
                function drawList() {
                    outputEl.innerHTML = "";
                    for (i = 0; i < pageList.length; i++) {
                        outputEl.innerHTML += pageList[i] + "<br/>";
                    }
                }

                //logic to disable page buttons depending on which page you are currently on
                function check() {
                    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
                    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
                    document.getElementById("first").disabled = currentPage == 1 ? true : false;
                    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
                }

                //runs writeArticles function which takes the blank list array and populates it with an array of HTML strings to be populated into the DOM
                writer(items, list); //puts the articles in 'list' array -> passes it to loadlist()
                loadList(); //

            }
        }
    })
}
module.exports = paginate()