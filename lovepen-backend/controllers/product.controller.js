const Product = require("../models/product.model.js");
const { extend } = require("lodash");
const allErrorsHandler = require("../middlewares/all-error-handler.middleware.js");

//get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ response: products, success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

//get all products by id
exports.getProductById = async (req, res, next) => {
  try {
    const productId = req.params;

    const product = await Product.findById({ _id: productId.id });
    if (product) {
      res.status(200).json({ response: product, success: true });
    } else {
      // res.status(404).json({ success: false, message: 'No product found' });
      return next(new allErrorsHandler("Product Not Found", 404));
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

//create Product
exports.createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const NewProduct = new Product(productData);
    const addedProductFromDb = await NewProduct.save();
    res.status(201).json({ response: addedProductFromDb, success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

//update a product

exports.updateProduct = async (req, res, next) => {
  try {
    let productToBeUpdated = await Product.findById(req.params.id);

    const productUpdates = req.body;

    if (!productToBeUpdated) {
      return next(new allErrorsHandler("Product Not Found", 404));
    }

    productToBeUpdated = extend(productToBeUpdated, productUpdates);
    productToBeUpdated = await productToBeUpdated.save();
    res.status(200).json({ success: true, response: productToBeUpdated });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

//delete a product

exports.deleteProduct = async (req, res, next) => {
  try {
    const productToBeDeleted = await Product.findById(req.params.id);

    if (!productToBeDeleted) {
      return next(new allErrorsHandler("Product Not Found", 404));
    }

    await productToBeDeleted.remove();

    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

//Search a product

exports.searchProduct = async (req, res) => {
  try {
    const searchedField = req.query.name;
    let filteredData = await Product.find({
      name: { $regex: searchedField, $options: "$i" },
    });

    return res.status(200).send(filteredData);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

//Sort the Product

exports.sortProduct = async (req, res) => {
  try {
    let ascendingSortedData = await Product.find().sort({ createdAt: -1 });
    return res.status(200).send(ascendingSortedData);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};
