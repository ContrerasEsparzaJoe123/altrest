const mongoose = require ('mongoose');

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    city: String,
    date: {
        type: Date,
        default: Date.now
    }
});



module.exports = mongoose.model('employee', postSchema);
