const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{res.json({name:'main-course'})})

module.exports=router;

