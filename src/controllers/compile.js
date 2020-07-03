const run = require('../services/run');
const saveToFile = require('../services/saveToFIle');

const compileController = () => {
  const compile = async (req,res) => {
    try {
        res.send("lol")
    } catch (error) {
      res.send(error)
    }
  }
  return {
    compile: compile
  }
}

module.exports = compileController;