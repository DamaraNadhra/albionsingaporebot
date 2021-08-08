const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: false,
}

const testSchema = mongoose.Schema({
    personName: reqString,
    discordID: reqString,
    personID: reqString,
    joinedAt: reqString,
    guildName: reqString,
})

module.exports = mongoose.model('register', testSchema)