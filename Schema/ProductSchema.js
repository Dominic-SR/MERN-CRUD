const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productname :{
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    }

})

module.exports = mongoose.model('products',ProductSchema);