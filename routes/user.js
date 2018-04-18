var express = require('express');
var router = express.Router();
var userController = require('../controller/user');
var authController = require('../controller/auth');

router.post('/', userController.createUser);
router.get('/', userController.getAllUser);
router.get('/:id',  userController.getUser);
router.delete('/:id', userController.deleteUser);
router.patch('/:id', userController.updateUser);

module.exports = router;