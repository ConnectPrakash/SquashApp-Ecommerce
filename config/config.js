const mongoose = require('mongoose');

const MongoDB = () =>{
    try{
        mongoose.connect(`mongodb+srv://pp3662504:Prakash%4012@cluster0.kztmo7u.mongodb.net/flibCout`)
        .then(()=>{
            console.log("MongoDB connected");
        })
    }
    catch(error){
        console.log("Error",error);
    }
}
module.exports = MongoDB