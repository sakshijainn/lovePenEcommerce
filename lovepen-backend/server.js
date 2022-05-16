const express = require('express');

const app = express();

app.use(express.json())

const dotenv = require("dotenv")

//Config

dotenv.config({path : "lovepen-backend/config/config.env"})


//Route Import 
const product = require("./routes/product.route")

app.use("/api/v1" , product)


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost: ${process.env.PORT}`)
    
})

