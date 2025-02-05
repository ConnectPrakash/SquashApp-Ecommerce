const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name:String,
        img:String,
        desc:String,
        Price:Number,
        rating:Number,
        qty:Number,
        Stock:String
    },{
        timestamps:true
    }
)
const ProductModel = mongoose.model('ProductsModel',ProductSchema);

module.exports = ProductModel;