const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: false,
}

const testSchema = mongoose.Schema({
    personName: reqString,
    regearID: reqString,
    estimated: reqString,
    status: reqString,
    regearOfficer: reqString,
    killerName: reqString,
    killerGuild: reqString,
    killerAlliance: reqString,
    victimAlliance: reqString,
    deathFame: reqString,
    killeravg: reqString,
    victimavg: reqString,
    victimGuild: reqString,
    date: reqString,
})

module.exports = mongoose.model('regear', testSchema)