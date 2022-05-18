const { Router } = require("express");
const express = require("express");
const { getAllProducts ,createProduct , updateProduct , getProductById, deleteProduct} = require("../controllers/product.controller");

const router = express.Router();


router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProductById);


//TRIED FOR BACKEND 

// router.route("/products/:id").get(getProductById)
// router.route("/products/new").post(createProduct);
// router.route("/products/:id").post(updateProduct);
// router.route("/products/:id").delete(deleteProduct)

module.exports = router