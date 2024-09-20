const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(express.json());
app.use(cors());

const productSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  oldPrice: Number,
  category: String,
  isActive: Boolean,
  description: String,
});

const Product = mongoose.model("product", productSchema);

mongoose.connect("mongodb://localhost:27017/new-crud");

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products)
});

app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

app.post("/product", async(req, res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
})

app.put("/products/:id", async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body , {new : true});
    res.json(product);
})

app.delete("/product/:id", async(req,res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({message: "Product Deleted"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
