const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: false,
}

const testSchema = mongoose.Schema({
    personName: reqString,
    personID: reqString,
    liquidateID: reqString,
    locationChannel: reqString,
    status: reqString
})

module.exports = mongoose.model('person', testSchema)