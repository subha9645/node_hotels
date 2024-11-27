const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/',async (req,res)=>{
    try{
      const data=req.body;//assuming the req body contains the person data
      //create a new person document using the mongoose model
      const newMenu= new MenuItem(data);
      // newPerson.name=data.name;
      // newPerson.age=data.age;
      // newPerson.mobile=data.mobile;
      // newPerson.address=data.address;
      
      //save the data to the database
      const response= await newMenu.save();
      console.log('menu saved');
      res.status(200).json(response);
    }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
    }
    
    })
    //get method to get a person
    router.get('/', async (req,res)=>{
      try{
    const data=await req.find();
    console.log('menu fetched');
      res.status(200).json(data);
      }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
      }
    })

    module.exports=router;