const execa = require("execa");


const compile = async (programType, filePath) => {
  return new Promise(async (resolve, reject)=>{
    try {
      const { stdout } = await execa(programType, [filePath]);
      resolve(stdout);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}
