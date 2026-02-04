const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product must have name"],
  },
  ProductImage: {
    type: [String],
    // required: [true, "Provide Image"],
  },
  ProductDescription: {
    type: String,
    required: [true, "Insert product description"],
  },
  ProductClassification: {
    type: String,
  },
  BasePrice: {
    type: Number,
  },
  discountedPrice: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
});

const Product =
  mongoose.models.products || mongoose.model("products", productSchema);
export default Product;
