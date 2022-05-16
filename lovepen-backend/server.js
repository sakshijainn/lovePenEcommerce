const express = require('express');

const dotenv  = require("dotenv")

const connectDatabase = require("./database/DBConnect")

const app = express();

app.use(express.json())


//Config

dotenv.config({path: "lovepen-backend/config/config.env"})

//Connect to database 
connectDatabase()



//Route Import 
const product = require("./routes/product.route")

//Use the route 

app.use("/api/v1" , product)


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost: ${process.env.PORT}`)
    
})

