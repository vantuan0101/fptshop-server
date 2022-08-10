const fs = require("fs");
const { dirname } = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cloudinary = require("cloudinary").v2;
const base_url = process.env.BASE_URL;
const appDir = dirname(require.main.filename);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});



// Function get path image
const getPathImage = (fileImg) => {
  let listImg = fileImg?.reduce((acc, cur) => {
    // acc.push(base_url + cur.path); : upload on server local
    acc.push(cur.path); // upload on cloud
    return acc;
  }, []);
  return listImg;
};
// ------------------------------------------------------------
const deleteImage = (public_id) => {
  // delete Image On cloudinary
  cloudinary.uploader.destroy(public_id, function (error, result) {
    console.log(result, error);
  });
};
const deleteImageLocal = (image) => {
  // Delete Image On server Local
  fs.unlink(appDir + image.split(base_url)[1], function (err) {
    if (err) {
      console.log("File not Found!");
    }
    // if no error, file has been deleted successfully
    console.log("File deleted!");
  });
};

module.exports = { getPathImage, deleteImage ,deleteImageLocal};
