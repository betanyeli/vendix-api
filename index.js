const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/product", (req, res) => {
  res.status(200).send({
    id: "1",
    name: "Coca-Cola Light",
    price: 1990,
  });
});

app.post("/product/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res
      .status(418)
      .send({ message: `Provide a name for the product with ID: ${id}` });
  }
  res.send({
    name: name,
  });
});

app.listen(PORT, () => console.log("Hallo World"));
