const express=require('express')
const router=express.Router();
const beverageController=require('../controllers/chaiController')

router.get('/',beverageController.getBeverages)
router.post('/',beverageController.postBeverage)

module.exports=router;

