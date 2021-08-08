const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: false,
}

const testSchema = mongoose.Schema({
    liquidatorID: reqString,
    date: reqString,
    location: reqString,
    status: reqString
})

module.exports = mongoose.model('splitzz', testSchema)