const execa = require("execa");
const programType = require("../utils/constants");

const run = async (extension, filePath) => {
  try {
    const { stdout, stderr } = await execa(programType[extension], [filePath]);

    return {
      data: stdout,
      error: null,
    };
  } catch (error) {
    return {
      error: error.stderr,
    };
  }
};

module.exports = run;
