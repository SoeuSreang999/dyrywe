// server/api/products/index.get.js
import connectDB from '~~/server/utils/db';
import Product from '~~/server/models/Product';

export default defineEventHandler(async (event) => {
  await connectDB();

  const products = await Product.find();

  return products;
});
