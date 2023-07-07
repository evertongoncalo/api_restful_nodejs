const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    product : String,
    brand : String,
    price : Number,
})

const Model = mongoose.model('products', schema)

module.exports = Model