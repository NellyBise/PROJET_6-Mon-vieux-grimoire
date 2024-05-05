const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const imageConvert = require('../middleware/image-convert');
const bookCtrl = require('../controllers/book');

router.post('/:id/rating', auth, bookCtrl.createRating);
router.post('/', auth, multer, imageConvert, bookCtrl.createBook);
router.get('/', bookCtrl.getAllBooks);
router.get('/bestrating', bookCtrl.getBestBooks);
router.get('/:id', bookCtrl.getOneBook);
router.delete('/:id', auth, bookCtrl.deleteOneBook);
router.put('/:id', auth, multer, imageConvert, bookCtrl.modifyBook);

module.exports = router;
