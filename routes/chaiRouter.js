const express=require('express')
const router=express.Router();
const chaiController=require('../controllers/chaiController')

router.get('/',chaiController.getChai)

module.exports=router;

