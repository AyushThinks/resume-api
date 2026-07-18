const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data/data.json');

/** Read */
function readData() {
  return JSON.parse(fs.readFileSync(dataPath));
}

module.exports = readData;