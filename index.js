const express=require('express')

const app = express();
const PORT = 3001;


app.use(express.json());




//read item
app.get('/', (req,res)=>{
   console.log("get request successful")
   res.send("get req successful");

});



app.listen(PORT, ()=> console.log(`server running on http://localhost:${PORT}`))

module.exports=app