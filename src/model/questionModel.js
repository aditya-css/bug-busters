const mongoose = require('mongoose')
    //Schema For Question Model.
const productSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true,
            trim: true,
            index: {
                unique: true
            }
        },
        qty: {
            type: Number,
            require: true,
            trim: true
        },
        available: {
            type: Boolean,
            require: true,
            trim: true
        }
    }, {
        timestamps: true
    })
    //Exports Question Model
module.exports = mongoose.model('product', productSchema)