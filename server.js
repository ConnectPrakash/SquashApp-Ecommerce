const express = require('express');
const cors = require('cors');
const MongoDB = require('./config/config.js');
const {ProductController,ProductDetails, ProductParticularDetails, ProductUpdate} = require('./controllers/ProductControllers.js');
const app = express();
app.use(express.json());
app.use(cors())
app.get('/',ProductDetails);
app.get('/:id',ProductParticularDetails);
app.put('/:id',ProductUpdate);
app.post('/api/post',ProductController);

app.listen(5000,()=>{
    MongoDB();
    console.log("Server connected");
})