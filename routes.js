const express = require('express')
const routes = express.Router()
const ProductController = require("ProductController.js")

routes.get('/', function(req, res) {
    return res.render("layout.html")
})

routes.get('create.html', ProductController.create)
routes.post(ProductController.post)

routes.get('create.html', function(req, res) {
    return res.redirect("create.html")
})



module.exports = routes