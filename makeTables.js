const fs = require('fs')
const j2md = require("json-to-markdown");
const folder = process.argv[2];

fs.readdir("./units", (err, files) => {
  files.forEach(file => {
    const units = require("./units/" + file);
    console.log(j2md(units, Object.keys(units[0])));
  });
});
