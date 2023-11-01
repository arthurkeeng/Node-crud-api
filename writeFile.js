const fs = require("fs");

const writeToFile = (fileName, content) => {
  console.log(content);
  fs.writeFileSync(fileName, JSON.stringify(content), "utf-8", (err) => {
    if (err) console.log(err);
  });
};

module.exports = { writeToFile };
