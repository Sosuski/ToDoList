const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    tasks:{
        type: String, 
        unique: true 
    },
})
module.exports =  mongoose.model('ToDo', toDoSchema);
