const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Ruta para obtener todos los roles
router.get('/', ProductController.getAllProducts);

// Ruta para obtener un rol por ID
router.get('/:id', ProductController.getProductById);

// Ruta para crear un nuevo rol
router.post('/', ProductController.createProduct);

// Ruta para actualizar un rol por ID
router.put('/:id', ProductController.updateProduct);

// Ruta para eliminar un rol por ID
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
