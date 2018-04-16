var express = require('express');
var router = express.Router();
var productController = require('../controller/product');
var authConttoller = require('../controller/auth');

router.post('/', productController.createProduct);
router.get('/:id', productController.getProduct);
router.get('/', productController.getAllProduct);
router.post('/:id', productController.updateProduct);
router.patch('/:id', productController.updateProduct2);
router.delete('/:id', authConttoller.userAuthenticate, productController.deleteProduct);

module.exports = router;