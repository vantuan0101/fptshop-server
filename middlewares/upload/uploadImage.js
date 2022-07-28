const multer = require("multer");
const mkdirp = require('mkdirp');
const uploadImage = (type) => {
  const made = mkdirp.sync(`./public/images/${type}`)
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extendImagePath = [".png", ".jpg",".jpeg"];
      const extend = file.originalname.slice(-4);
      const check = extendImagePath.includes(extend);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("File khong hop le"));
      }
    },
  });
  return upload.single(type)
};

module.exports = {
    uploadImage
}
