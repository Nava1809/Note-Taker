const mongoose =require('mongoose');

const NotesSchema = new mongoose.Schema({


    title: String,
    designation: String,
    user : {type : mongoose.Schema.Types.ObjectId , ref: 'User' }


})

const Notes = mongoose.model('notes', NotesSchema);

module.exports = Notes;