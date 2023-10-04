const express = require("express");
const app = express();
const productRoutes = require("./routes/products/index");
const public = require("./public");

app.use(express.json());

app.use("/products", productRoutes);

app.get("*", (req, res) => {
  res.send(public);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Vendor API is running .."));
