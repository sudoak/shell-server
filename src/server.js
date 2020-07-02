const execa = require("execa");

async function main() {
  try {
    const { stdout } = await execa("node", ["./src/lol.js"]);
    console.log(stdout);
  } catch (error) {
    console.error(error);
    å;
  }
}

main();
