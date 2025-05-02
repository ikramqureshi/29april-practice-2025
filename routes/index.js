const express=require('express')
const router=express.Router();
const beverageRouter=require('./chaiRouter')
const dessertRouter=require('./dessertRouter')
const mainCourseRouter=require('./mainCourseRouter')
const starterRouter=require('./starterRouter')




router.use('/beverage',beverageRouter)
router.use('/dessert',dessertRouter)

router.use('/main-course',mainCourseRouter)
router.use('/starter',starterRouter)

module.exports=router;
