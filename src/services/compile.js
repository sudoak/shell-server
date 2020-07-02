const execa = require("execa");


const compile = async () => {
  return new Promise(async (resolve, reject)=>{
    try {
      const { stdout } = await execa("node", ["./src/lol.js"]);
      resolve(stdout);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}
