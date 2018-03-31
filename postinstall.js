const fs = require("fs");

fs.readdir("./units", (err, files) => {
  files.forEach(file => {
    const type = file.split(".")[0];
    const path = `./${type}`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    const fileContent = `module.exports = require("../index")(require("../units/${type}"))`;

    fs.writeFileSync(path + "/index.js", fileContent);
  });
});
