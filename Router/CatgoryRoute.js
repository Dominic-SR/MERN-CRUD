const express = require('express');
const router = express.Router();
const Category = require('../Schema/CategorySchema');
var multer = require('multer');

router.post('/category',async(req,res) => {
    try{
        console.log(req.body.myfile);
     
        const postCatgory = await new Category({
            catgoryname:req.body.catgoryname,
            description:req.body.description,
            image:req.body.image
        });
        const saveCatgory = await postCatgory.save();
        res.status(200).json(saveCatgory);
    }
    catch(err){
        res.json({"err":err})
    }
})

router.get('/category',async(req,res) => {
    try{
        const getAll = await Category.find()
        res.status(200).json(getAll);
    }
    catch(err){
        res.json({"err":err})
    }
})

router.get('/category/:id',async(req,res) => {
    try{
        const getById = await Category.findById(req.params.id)
        res.status(200).json(getById);
    }
    catch(err){
        res.json({"err":err});
    }
})

router.put('/category/:id',async(req,res) => {
    try{
    const updateCatgory = await Category.updateOne({_id:req.params.id},{$set:{catgoryname:req.body.catgoryname,description:req.body.description,image:req.body.image}})   
    res.status(200).json(updateCatgory);
    }
    catch(err){
        res.json({"err":err})
    }
})


router.delete('/category/:id',async(req,res) => {
    try{
        const deleteCategory = await Category.remove({_id:req.params.id});
        res.status(200).json(deleteCategory);
    }
    catch(err){
        res.json({"err":err})
    }
})
module.exports = router;