const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'files'
})

module.exports = mongoose.model('Files', fileSchema)