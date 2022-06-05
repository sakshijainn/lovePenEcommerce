const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:  "Name of the product is a required attribute",
    },
    description: {
      type: String,
      required: "Description of the product is a required attribute",
    },
    price: {
      type: Number,
      required: "Price value of the product is required",
      maxLength: 8,
    },
    rating: {
      type: Number,
      default: 0,
    },
    image: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: "Please enter product category",
    },
    Quantity: {
      type: Number,
      required: "Please enter product quantity ",
      default: 1,
    },
    created_by : { type: mongoose.Schema.Types.ObjectId }
    
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;


