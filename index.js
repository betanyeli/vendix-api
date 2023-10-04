const express = require("express");
const app = express();
const productRoutes = require("./routes/products/index");

app.use(express.json());

app.use("/products", productRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Vendor API is running .."));
