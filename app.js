const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
    data: [{ id: 1, name: "AZE!" }],
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server up and running"));
