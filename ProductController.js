const { post } = require("routes")

const Category = require('Category')

module.exports = {
    create(req, res) {
        Category.all()
        .then(function(results) {
            const categories = results.rows
            return res.render("create.html", { categories })
        }).catch(function(err) {
            throw new Error(err)
        })

    },
    post(req, res) {

    }
}