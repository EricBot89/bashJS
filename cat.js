const fs = require("fs");
const pwd = require("./pwd");

module.exports = function(fileName){
  let currentPath = pwd();
  fs.readFile(currentPath + "/" + fileName, (err,data) => {
  if(err){throw err}
  console.log(data);
  process.stdout.write("\nprompt > ");
  });

}
