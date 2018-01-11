const articleFactory = require("../blog/articleFactory")
const adminListeners = require("./adminListeners")
const adminWriter = require("./adminWriter")

const adminController = Object.create(null, {
    "init": {
        value: function () {
            articleFactory.all().then(articles => {
                adminWriter.render(articles)
                adminListeners.articlesToList = articles
                adminListeners.start()
            })
        }
    },
    "refresh": {
        value: function() {
            articleFactory.all().then(articles => {
                adminWriter.render(articles)
                adminListeners.articlesToList = articles
            })
        }
    }
})


module.exports = adminController