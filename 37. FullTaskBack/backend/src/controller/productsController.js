const Product=require("./../models/productModel")
const getAllProducts=async(req,res)=>{
    const products=await Product.find();
    res.send(products)
}
const postProducts=async(req,res)=>{
    const obj=req.body
    const newProducts= await new Product(obj)
    newProducts.save()
    res.status(200).send("success")
}
const getProductById=async(req,res)=>{
    const getElem=await Product.find({ _id:req.params.id})
    res.status(200).send(getElem)
}
const deleteById=async (req,res)=>{
    await Product.findOneAndDelete({_id:req.params.id})
    res.status(200).send("Element silindi")
}
const patchById=async (req,res)=>{
    const newProduct=await Product.findOneAndUpdate({_id:req.params.id},req.body)
    res.status(200).send(newProduct)
}

const putById=async (req,res)=>{
    const newProduct=await Product.findOneAndReplace({_id:req.params.id},req.body)
    res.status(200).send(newProduct)
} 

const putByIdSelf = async (req, res) => {
    const getElem = await Product.find({ _id: req.params.id });
    const newProduct = await Product.findOneAndReplace(
        { _id: req.params.id },
        { _id: getElem._id, ...req.body }
    );
    res.status(200).json(newProduct);
};



module.exports={getAllProducts,postProducts,getProductById,deleteById,patchById,putById,putByIdSelf}