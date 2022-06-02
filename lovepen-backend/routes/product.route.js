const { Router } = require("express");
const express = require("express");
const { getAllProducts ,ProductList , createProduct , updateProduct , getProductById, searchProduct ,deleteProduct} = require("../controllers/product.controller");

const router = express.Router();


router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProductById);
router.route('/search/:key').get(searchProduct);



//TRIED FOR BACKEND 
// router.route("/products") .get(getAllProducts)
// router.route("/products/:id").get(getProductById)
// router.route("/products/new").post(createProduct);
// router.route("/products/:id").post(updateProduct);
// router.route("/products/:id").delete(deleteProduct)

module.exports = router