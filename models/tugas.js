const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: false,
};

const testSchema = mongoose.Schema({
  mapel: reqString,
  deadline: reqString,
  description: reqString,
  id: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("tugas", testSchema);
