const mongoose = require('mongoose');

// productName, status, description, minStock, maxStock, quantity, category, buyPrice, sellPrice

const roleSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true, 
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  minStock: {
    type: Number,
    required: true,
  },
  maxStock: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  },
  sellPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model('Product', roleSchema);

module.exports = Product;
