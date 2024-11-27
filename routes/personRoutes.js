const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

//post route to add a person
router.post('/',async (req,res)=>{
    try{
      const data=req.body;//assuming the req body contains the person data
      //create a new person document using the mongoose model
      const newPerson= new Person(data);
      // newPerson.name=data.name;
      // newPerson.age=data.age;
      // newPerson.mobile=data.mobile;
      // newPerson.address=data.address;
      
      //save the data to the database
      const response= await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
    }
    
})

//get method to get a person
router.get('/', async (req,res)=>{
    try{
  const data=await req.find();//req ki jagah person bhi karke dekhna
  console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/:workType', async (req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=='chef' || workType=='waiter' || workType=='manager'){
        const response=await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error: 'Invaid work type'});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
})

router.put('/:id', async (req,res)=>{
try{
  const personId=req.params.id; //extract the id from the url parameter
  const updatedPersonData=req.body; //updated data for the person
  const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
    new: true, //return the updated document
    runValidators: true, //run mongoose validation
  })
  if(!response){
    return res.status(404).json({error:'person not found'});
  }
  console.log('data updated');
  res.status(200).json(response);
}catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
}
})

router.delete('/:id', async (req,res)=>{
    try{
      const personId=req.params.id; //extract the id from the url parameter
      //updated data for the person
      const response=await Person.findByIdAndDelete(personId);
      if(!response){
        return res.status(404).json({error:'person not found'});
      }
      console.log('data deleted');
      res.status(200).json({message: 'person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
    })


module.exports=router;