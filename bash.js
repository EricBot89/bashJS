const pwdCmd = require("./pwd");
const lsCmd = require("./ls");
const catCmd = require("./cat");
const fs = require("fs");

process.stdout.write("prompt > ");

process.stdin.on("data", (data, err) => {
  if (err) {
    throw "Error";
  }
  const cmd = data
    .toString()
    .trim();
  if (cmd.toUpperCase() === "PWD") {
    pwdCmd();
  } else if (cmd.toUpperCase() === "LS") {
	  lsCmd();
  } else if (cmd.split(" ")[0].toUpperCase() === "CAT") {
    let fileName = cmd.split(" ")[1];
    catCmd(fileName);
  } else {
    process.stdout.write('Unrecognized command "' + cmd + '"');
  }
});
