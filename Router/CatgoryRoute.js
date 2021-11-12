const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();
const Category = require('../Schema/CategorySchema');


router.post('/category',async(req,res) => {
    try{
       
        var fu = req.files.image;
        fu.mv('C:/Users/Dominic/Desktop/backup/project/MERN/fullfunctional/my-app/public/uploads/'+fu.name);
        
        const postCatgory = await new Category({
            catgoryname:req.body.catgoryname,
            description:req.body.description,
            image:fu.name
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
   var filename = req.body.myfile;
    if(filename === "undefined"){
        const updateCatgory = await Category.updateOne({_id:req.body.id},{$set:{catgoryname:req.body.catgoryname,description:req.body.description}})   
        res.status(200).json(updateCatgory);
    }
    else{
        var fu = req.files.image;
        fu.mv('C:/Users/Dominic/Desktop/backup/project/MERN/fullfunctional/my-app/public/uploads/'+fu.name);
        const updateCatgory = await Category.updateOne({_id:req.body.id},{$set:{catgoryname:req.body.catgoryname,description:req.body.description,image:fu.name}})   
        res.status(200).json(updateCatgory);
    }
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