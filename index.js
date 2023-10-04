const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const productRoutes = require("./routes/products/index");
const public = require("./public");

// Enable CORS for all routes.
app.use(cors());

app.use(express.json());

app.use("/products", productRoutes);

app.get("*", (req, res) => {
  res.send(public);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Vendor API is running .."));
