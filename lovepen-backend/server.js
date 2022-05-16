const express = require('express');

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json())


//Route Import 
const product = require("./routes/product.route")

//Use the route 

app.use("/api/v1" , product)


app.listen(port,()=>{
    console.log(`Server is working on http://localhost: `,port)
    
})

