module.exports = function() {
  process.stdout.write(process.env.PWD);
  process.stdout.write("\nprompt > ");
  return process.env.PWD;
};
