const Product = require('../models/Product');

// Obtener todos los roles
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
}

// Obtener un rol por ID
async function getProductById(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
}

// Crear un nuevo rol
async function createProduct(req, res) {
  const { productName, status, description, minStock, maxStock, quantity, category, buyPrice, sellPrice } = req.body;
  try {
    const product = new Product({ productName, status, description, minStock, maxStock, quantity, category, buyPrice, sellPrice });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el producto.' });
  }
}

// Actualizar un rol por ID
async function updateProduct(req, res) {
  const { id } = req.params;
  const { productName, status, description, minStock, maxStock, quantity, category, buyPrice, sellPrice } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, { productName, status, description, minStock, maxStock, quantity, category, buyPrice, sellPrice }, { new: true });
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el productO.' });
  }
}

// Eliminar un rol por ID
async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto.' });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
