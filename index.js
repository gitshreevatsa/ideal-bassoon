const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contract = require("./contractIntegration");
const ethers = require("ethers")

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/auth", async (req, res) => {
  let address = req.query.address;
  address = address.replace(/-/g, '');
  const result = await contract.isAddressAuthorized("0x" + address);
  if (result === true) {
    res.status(200).json({ result });
  } else {
    res.status(401).json({ result });
  }
});

app.post("/auth", async (req, res) => {
  let address = req.body.address;
  address = address.replace(/-/g, '');
  const result = await contract.addAddress("0x" + address);
  console.log(result)
  res.status(200).json({ result: true });
});

app.get("/add", async (req, res) => {
  let address = req.query.address;
  address = address.replace(/-/g, '');
  
  // Ensure the address is converted to a proper bytes16 format
  if (address.length !== 32) {
    return res.status(400).json({ error: "Invalid address length. Expected 32 characters for bytes16 format." });
  }

  try {
    console.log(address)
    // Convert address to bytes16 format

    const result = await contract.addAddress("0x" + address);
    console.log(result)
    if (result) {
      res.status(200).json({ result: true, message: "Address is Authenticated" });
    } else {
      res.status(401).json({ result: false, message: "Not authenticated" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }


});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
