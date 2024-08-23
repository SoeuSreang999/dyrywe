// server/models/Product.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

const Product = mongoose.models.Product || mongoose.model('Products', ProductSchema);

export default Product;
