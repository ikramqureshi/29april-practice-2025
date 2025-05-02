const { v4: uuidv4 } = require('uuid');
const db = require('../database/models/index');
const Beverages = db.beverages;

//const chaiList=[1,2,3]
//const chaiList=["normal-chai","masala-chai","ginger-chai","sulemani"]
// const chaiList=[
//     {id:1,name:'kadak-chai',description:'yellow colour',price:25},
//     {id:2,name:'masala-chai',description:'will be with masala',price:35},
//     {id:3,name:'black-chai',description:'just water and tea leaves',price:15},
//     {id:4,name:'green-chai',description:'good for dieting',price:100},
// ]

const getBeverages = async (req, res) => {
    try {
        const beverages = await Beverages.findAll(); // fetches all rows from the table
        res.status(200).json(beverages);
      } catch (error) {
        console.error("❌ Error fetching beverages:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }

    //we are going to make db call here
    //  res.json({ chaiList: chaiList })
}
const postBeverage=async (req,res)=>{
    try{

        console.log('beverages',Beverages)
        
        const {beverage_name,description,price}=req.body //destructing
        const beverage={
          public_id: uuidv4(), // Generate a unique UUID
            beverage_name:beverage_name,
            description:description,
            price:price,
        }
       
        
        const newBeverage = await Beverages.create(beverage);
        
        
        res.status(201).json(newBeverage);
    }catch (error) {
        console.error('🔥 Sequelize Error:', error); // 👈 Will show the root cause
        res.status(500).json({ message: error.message });
      }
}

module.exports={
    getBeverages:getBeverages,
    postBeverage:postBeverage

}

