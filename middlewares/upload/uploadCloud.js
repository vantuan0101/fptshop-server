const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const uploadImageCloud = (fields) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "FPTShop",
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      // console.log(file);
      if (file.mimetype.startsWith("image")) {
        cb(null, true);
      } else {
        cb(new Error("Chỉ upload file ảnh"));
      }
    },
  });

  return upload.fields(fields);
};

module.exports = {
  uploadImageCloud,
};
