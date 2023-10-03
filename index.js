const express = require("express");
const app = express();

const PORT = 8080;

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
    res.status(418).send({ message: "Please, provide a name for" + " " + id });
  }
  res.send({
    name: name,
  });
});

app.listen(PORT, () => console.log("Holi"));
