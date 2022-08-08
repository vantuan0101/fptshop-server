const fs = require("fs");
const { dirname } = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const base_url = process.env.BASE_URL;
const appDir = dirname(require.main.filename);

// Function get path image
const getPathImage = (fileImg) => {
  let listImg = fileImg?.reduce((acc, cur) => {
    acc.push(base_url + cur.path);
    return acc;
  }, []);
  return listImg;
};
// ------------------------------------------------------------
const deleteImage = (image) => {
  fs.unlink(appDir + image.slice(21), function (err) {
    if (err) {
      console.log("File not Found!");
    }
    // if no error, file has been deleted successfully
    console.log("File deleted!");
  });
};

module.exports = { getPathImage, deleteImage };
