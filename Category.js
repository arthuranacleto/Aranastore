const db = require('db')

module.exports = {
    all() {
        return db.query(`
            SELECT * FROM categories
        `)
    }
}