const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: false,
}

const testSchema = mongoose.Schema({
    officer: reqString,
    officerId: reqString,
    channelId: reqString,
    status: reqString,
    victim: reqString,
    victimId: reqString
})

module.exports = mongoose.model('reports', testSchema)