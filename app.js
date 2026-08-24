const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URI = "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URI);
}

app.get("/", (req, res) => {
  res.send("Hi I am a server");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My New Villaa",
    description: "By the beach",
    price: 1000,
    location: "California",
    country: "USA",
  });

  await sampleListing.save();
  console.log("Listing saved successfully");
  res.send("Listing saved successfully");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
