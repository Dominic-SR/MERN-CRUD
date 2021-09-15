const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    Name :{
        type : String,
        require : true
    },
    Age :{
        type : String,
        require : true
    },
    CreatedDate :{
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Persons',PersonSchema);