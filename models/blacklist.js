const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: false,
}

const testSchema = mongoose.Schema({
    blname: reqString,
    blacklister: reqString,
    date: reqString,
    reason: reqString
})

module.exports = mongoose.model('blacklist', testSchema)