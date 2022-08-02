const multer = require("multer");
const mkdirp = require("mkdirp");
const uploadImage = (type, fields) => {
  const made = mkdirp.sync(`./public/images/${type}`);
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
      console.log(file);
      if (file.mimetype.startsWith("image")) {
        cb(null, true);
      } else {
        cb(new Error("Chỉ upload file ảnh"));
      }
      
    },
  });
  // const upload = multer({ storage: storage });

  return upload.fields(fields);
};

module.exports = {
  uploadImage,
};
