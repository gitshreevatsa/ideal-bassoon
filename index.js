const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contract = require("./contractIntegration");

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/auth", async (req, res) => {
  const address = req.query.address;
  const result = await contract.isAddressAuthorized(address);
  if (result === true) {
    res.status(200).json({ result });
  } else {
    res.status(401).json({ result });
  }
});

app.post("/auth", async (req, res) => {
  const address = req.body.address;
  const result = await contract.addAddress(address);
  res.status(200).json({ result });
});

app.get("/add", async (req, res) => {
  const address = req.query.address;
  const result = await contract.addAddress(address);
  if (result === true) {
    res.status(200).json({ result });
  } else {
    res.status(401).json({ result });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
