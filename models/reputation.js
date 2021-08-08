const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: false,
}

const testSchema = mongoose.Schema({
    name: reqString,
    id: reqString,
    rep: {
        type: Number,
        required: false,
    },
})

module.exports = mongoose.model('reputation', testSchema)