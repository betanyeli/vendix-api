const products = require("../../dummyData");
const errorMessageBadRequest = `Bad request ! - Incomplete required params`;

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res
      .status(404)
      .json({ message: `Product with ID ${productId} not found` });
  }

  res.status(200).json(product);
};

const createProduct = (req, res) => {
  const { productName, sellerId, amountAvailable, cost, stock, createdAt } =
    req.body;

  const incompleteRequest =
    !productName &&
    !sellerId &&
    !amountAvailable &&
    !cost &&
    !stock &&
    !createdAt;

  const newProduct = {
    id: products.length + 1,
    productName,
    sellerId,
    amountAvailable,
    cost,
    stock,
    createdAt,
  };

  if (incompleteRequest)
    return res.status(400).json({
      message: errorMessageBadRequest,
    });

  products.push(newProduct);

  res.status(200).json(newProduct);
};

const updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const { productName } = req.body;
  const productIndex = products.findIndex((p) => p.id === productId);
  const errorMessageProductNotFound = `Product with ID ${productId} not found`;

  if (productIndex === -1) {
    return res.status(404).json({ message: errorMessageProductNotFound });
  }

  if (!productName)
    return res.status(400).json({
      message: errorMessageBadRequest,
    });

  products[productIndex] = {
    ...products[productIndex],
    productName: productName || products[productIndex].productName,
  };

  res
    .status(200)
    .json({
      message: "Product successfully updated",
      response: products[productIndex],
    });
};

const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ message: `Product with ID ${productId} not found` });
  }

  res
    .status(200)
    .json({ message: `Product with ID ${productId} successfully deleted` });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
