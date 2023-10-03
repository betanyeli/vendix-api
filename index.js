const express = require("express");
const app = express();
let products = require("./dummyData.js"); // todo: retrieve this from DB
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/products", (req, res) => {
  res.status(200).send(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res
      .status(404)
      .send({ message: `Product with id: ${productId} not found` });
  }

  res.status(200).send(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .send({ message: "Both name and price are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);
  res.status(201).send(newProduct);
});

app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;

  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res
      .status(404)
      .send({ message: `Product with id: ${productId} not found` });
  }

  products[productIndex] = {
    ...products[productIndex],
    name: name || products[productIndex].name,
    price: price || products[productIndex].price,
  };

  res.status(200).send(products[productIndex]);
});

app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res
      .status(404)
      .send({ message: `Product with id: ${productId} not found` });
  }

  const deletedProduct = products.splice(productIndex, 1);
  res.status(200).send(deletedProduct[0]);
});

app.listen(PORT, () => console.log("Vendor API"));
