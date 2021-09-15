const express = require('express');
const router = express.Router();
const Persons = require('../Schema/PersonsSchema');

//PostPerson
router.post('/',async(req,res) => {
  try{
    const postPerson = await new Persons({
        Name : req.body.Name,
        Age : req.body.Age
    });
    const savePersons = await postPerson.save();
    res.status(200).json(savePersons);
}
catch(err){
    res.json({"err":err})
}
});

//GetPerson
router.get('/',async(req,res) => {
    try{
      const getAll = await Persons.find()
      res.status(200).json(getAll);
  }
  catch(err){
      res.json({"err":err})
  }
  });

//GetByIdPerson
router.get('/:id',async(req,res) => {
    try{
      const getById = await Persons.findById(req.params.id)
      res.status(200).json(getById);
  }
  catch(err){
      res.json({"err":err})
  }
  });

//UpdatePerson
router.put('/:id',async(req,res) => {
    try{
      const updatePerson = await Persons.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}})
      res.status(200).json(updatePerson);
  }
  catch(err){
      res.json({"err":err})
  }
  });

  //DeletePerson
router.delete('/:id',async(req,res) => {
    try{
      const deletePersons = await Persons.remove({_id:req.params.id});
      res.status(200).json(deletePersons);
  }
  catch(err){
      res.json({"err":err})
  }
  });

module.exports = router;