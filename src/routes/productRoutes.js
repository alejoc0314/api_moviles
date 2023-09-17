const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Ruta para obtener todos los roles
router.get('/products', ProductController.getAllProducts);

// Ruta para obtener un rol por ID
router.get('/products/:id', ProductController.getProductById);

// Ruta para crear un nuevo rol
router.post('/products', ProductController.createProduct);

// Ruta para actualizar un rol por ID
router.put('/products/:id', ProductController.updateProduct);

// Ruta para eliminar un rol por ID
router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;
