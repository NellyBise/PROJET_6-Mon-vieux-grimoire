const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_').split('.')[0];
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  },
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg'
    ) {
      callback(null, true);
    } else {
      callback(
        new Error(
          'Format de fichier invalide : seuls les formats JPEG, JPG, and PNG sont autorisés.'
        ),
        false
      );
    }
  },
});

module.exports = multer({ storage: storage }).single('image');
