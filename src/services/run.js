const execa = require("execa");
const programType = require('../utils/constants');

const run = async (extension, filePath) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { stdout } = await execa(programType[extension], [filePath]);
      resolve(stdout);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = run;
