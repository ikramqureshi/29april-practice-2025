//const chaiList=[1,2,3]
//const chaiList=["normal-chai","masala-chai","ginger-chai","sulemani"]
const chaiList=[
    {id:1,name:'kadak-chai',description:'yellow colour',price:25},
    {id:2,name:'masala-chai',description:'will be with masala',price:35},
    {id:3,name:'black-chai',description:'just water and tea leaves',price:15},
    {id:4,name:'green-chai',description:'good for dieting',price:100},
]

const getChai = (req, res) => {

    //we are going to make db call heress
    res.json({ chaiList: chaiList })
}

module.exports={getChai:getChai}

