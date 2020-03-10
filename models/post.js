const mongoose = require ('mongoose');

const postSchema = mongoose.Schema({
    pulso: String,
    fecha: {
        type: Date,
        default: Date.now
    },
    sensor: String,

});



module.exports = mongoose.model('employee', postSchema);
