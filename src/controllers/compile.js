const run = require("../services/run");
const saveToFile = require("../services/saveToFIle");

const compileController = () => {
  const compile = async (req, res, next) => {
    try {
      const { code, type } = req.body;
      const { filePath, error } = await saveToFile(code, type);
      if(!error){
        const { data, error} = await run(type, filePath);
        if(!error){
          res.send({output: data});
          return
        }
        res.send({error});
        return
      }
      res.send({error});
    } catch (error) {
      next(error);
    }
  };
  return {
    compile: compile,
  };
};

module.exports = compileController;
