const ProductModel = require("../models/Product.models.js");

const ProductController = (req, res) => {
  const data = req.body;
  console.log(data);

  // Example: You can use the ProductModel to save data to the database
  const newProduct = new ProductModel(data);

  newProduct
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Product successfully created",
        product: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error saving product",
        error: error.message,
      });
    });
};

const ProductDetails = async(req,res) =>{
   const data =await ProductModel.find({})
  res.status(200).json(data);
}

const ProductParticularDetails = async(req,res) =>{
  const {id} = req.params;
  const data = await ProductModel.findById(id);
  res.status(200).json(data);
}
const ProductUpdate = async(req,res) =>{

  const {id} = req.params;
  const content = req.body;
  const data = await ProductModel.findByIdAndUpdate(id,content);
  res.status(200).json(data);
  
}
module.exports = {ProductController,ProductDetails,ProductParticularDetails,ProductUpdate};
