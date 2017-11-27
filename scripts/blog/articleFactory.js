const firebaseURL = "https://personal-site-3a80d.firebaseio.com/articles"

const articleFactory = Object.create(null, {
    "cache": {
        value: null,
        writable: true
    },
    "all": {
        value: function () {
            return $.ajax({
                "url": `${firebaseURL}/.json`,
                "method": "GET"
            }).then(articles => {
                this.cache = Object.keys(articles).map(key => {
                        articles[key].id = key
                        return articles[key]
                    })

                return this.cache
            })
        }
    },
    // "single": {
    //     value: function (id) {
    //         return $.ajax({
    //             "url": `${firebaseURL}/${id}/.json`,
    //             "method": "GET"
    //         })
    //     }
    // },
    "add": {
        value: function (article) {
            return $.ajax({
                "url": `${firebaseURL}/.json`,
                "method": "POST",
                "data": JSON.stringify(article)
            })
        }
    },
    "remove": {
        value: function (id) {
            return $.ajax({
                "url": `${firebaseURL}/${id}/.json`,
                "method": "DELETE"
            })
        }
    },
    "replace": {
        value: function (article, id) {
            return $.ajax({
                "url": `${firebaseURL}/${id}/.json`,
                "method": "PUT",
                "data": JSON.stringify(article)
            })
        }
    }
})


module.exports = articleFactory