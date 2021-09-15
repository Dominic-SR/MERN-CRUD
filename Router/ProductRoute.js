const express = require('express');
const router = express.Router();
const Product = require('../Schema/ProductSchema');
var multer = require('multer');


router.post('/product',async(req,res) => {
    try{
        console.log("q123");
        const postProduct = await new Product({
            productname:req.body.catgoryname,
            description:req.body.description
        });
        const saveProduct = await postProduct.save();
        res.status(200).json(saveProduct);
    }
    catch(err){
        res.json({"err":err})
    }
})

router.get('/product',async(req,res) => {
    try{
        const getAll = await Product.find()
        res.status(200).json(getAll);
    }
    catch(err){
        res.json({"err":err})
    }
})

router.get('/product/:id',async(req,res) => {
    try{
        const getById = await Product.findById(req.params.id)
        res.status(200).json(getById);
    }
    catch(err){
        res.json({"err":err});
    }
})

router.put('/product/:id',async(req,res) => {
    try{
    const updateProduct = await Product.updateOne({_id:req.params.id},{$set:{productname:req.body.productname,description:req.body.description}})   
    res.status(200).json(updateProduct);
    }
    catch(err){
        res.json({"err":err})
    }
})


router.delete('/product/:id',async(req,res) => {
    try{
        const deleteProduct = await Category.remove({_id:req.params.id});
        res.status(200).json(deleteProduct);
    }
    catch(err){
        res.json({"err":err})
    }
})
module.exports = router;