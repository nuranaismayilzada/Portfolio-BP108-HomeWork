const express = require("express")
const router = express.Router()
// const Products=require("./../models/productModel")
const productController=require("./../controller/productsController")

router.get("/products",productController.getAllProducts)
router.post("/products",productController.postProducts)
router.get("/products/:id",productController.getProductById)
router.delete("/products/:id",productController.deleteById)
router.patch("/products/:id",productController.patchById)
router.put("/products/:id",productController.putById)
router.put("/products/:id",productController.putByIdSelf)


module.exports = router
