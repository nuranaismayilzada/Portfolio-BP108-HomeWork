const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    id:Number,
    src:String,
    price:Number,
    oldPrice:Number
})
module.exports=mongoose.model("Products",productSchema)