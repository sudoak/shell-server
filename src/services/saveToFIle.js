const shortId = require("shortid");
const touch = require("touch");
const path = require("path");
const replace = require("replace-in-file");
const UglifyJS = require("uglify-js");
const cryptoRandomString = require("crypto-random-string");

const saveToFile = async (code, extension) => {
  try {
    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "files",
      `${cryptoRandomString({
        length: 6,
        type: "distinguishable",
      })}.${extension}`
    );
    touch(filePath);

    const options = {
      files: filePath,
      from: "",
      to: code,
    };
    await replace(options);
    return {
      filePath,
      error: null,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const _ = `
console.log('lol');
console.log('lol');
console.log('lol');




console.log('lol');


console.log('lol');
`;
module.exports = saveToFile;
