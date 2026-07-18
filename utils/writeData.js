const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data/data.json');

/** Write */
function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = writeData;