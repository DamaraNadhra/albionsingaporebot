const { zvzlist } = require("./list");
var choicesArray = [];
Object.keys(zvzlist).forEach((thing, index) => {
  Object.keys(zvzlist[thing]).forEach((m, i) => {
    var object = {};
    object["name"] = zvzlist[thing][m].label;
    object["value"] = m;
    choicesArray.push(object);
  });
});
console.log(choicesArray);
