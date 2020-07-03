const run = require("../services/run");
const saveToFile = require("../services/saveToFIle");

const compileController = () => {
  const compile = async (req, res, next) => {
    try {
      const { code, type } = req.body;
      const { filePath, error } = await saveToFile(code, type);
      const output = await run(type, filePath);
      res.send({output});
      if(error){
        throw new Error(error);
      }
    } catch (error) {
      next(error);
    }
  };
  return {
    compile: compile,
  };
};

module.exports = compileController;
