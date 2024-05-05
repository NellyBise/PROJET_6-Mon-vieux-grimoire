const sharp = require('sharp');
const fs = require('fs');

module.exports = (req, res, next) => {
  if (!req.file) {
    return next();
  }
  const originalImagePath = req.file.path;
  sharp.cache(false);
  sharp(req.file.path)
    .resize(470, 600)
    .webp({ quality: 60 })
    .toFile(`images/${req.file.filename.split('.')[0]}.webp`)
    .then(() => {
      if (fs.existsSync(originalImagePath)) {
        fs.unlinkSync(originalImagePath);
      }
      next();
    });
};
