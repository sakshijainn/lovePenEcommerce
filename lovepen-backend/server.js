const express = require('express');

const bodyParser = require('body-parser');

const dotenv  = require("dotenv")

//Config

dotenv.config({path: "lovepen-backend/config/config.env"})

const cors = require('cors');

const routeNotFoundHandler = require('./middlewares/route-not-found.middleware');
const allErrorsHandler = require('./middlewares/all-error-handler.middleware');

const connectDatabase = require("./database/DBConnect")

const app = express();

app.use(bodyParser.json())

app.use(cors());


//Connect to database 
connectDatabase()

app.get('/', (req, res) => {
	res.send('Welcome to the LovePen store');
});


//Route Import 
const product = require("./routes/product.route")

//Use the route 

app.use("/api/v1" , product)


/**
 * 404 Route Handler
 * Note: Do Not Move. This should be the last route.
 */
 app.use(routeNotFoundHandler);

 /**
  * Error Handler
  * Note: Do Not Move.
  */
 app.use(allErrorsHandler);


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost: ${process.env.PORT}`)
    
})

