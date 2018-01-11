const paginate = require("../paginate")
const articleFactory = require("./articleFactory")
const articleWriter = require("./articleWriter")
const searchBlogs = require("./search")
const adminWriter = require("../admin/adminWriter")

const articleController = Object.create(null, {
    "init": {
        value: function () {
            articleFactory.all().then(articles => {
                paginate.itemsToPaginate = articles
                paginate.start("blog_paginator", "blog_posts", articleWriter.render)
            })
            searchBlogs.init()
        }
    },
    "refresh": {
        value: function() {
            articleFactory.all().then(articles => {
                adminWriter.render(articles)
            })
        }
    }
})


module.exports = articleController