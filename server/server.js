const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Teo", lastName: "Toledo" },
    { id: 2, firstName: "Juan", lastName: "Gomez" },
    { id: 3, firstName: "Facundo", lastName: "Ricciardo" },
  ];
  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
