const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    catgoryname :{
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    }

})

module.exports = mongoose.model('catgory',CategorySchema);