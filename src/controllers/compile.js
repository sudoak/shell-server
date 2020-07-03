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