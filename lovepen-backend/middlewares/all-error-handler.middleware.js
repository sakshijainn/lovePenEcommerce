const allErrorsHandler = (err, req, res, next) =>{
    console.error(error.stack);
    err.statusCode = err.statusCode || 500
    err.message  = err.message || "error occurs, see the errorMessage key for more details"
    
    if(err.name  === "CastError")
    {
        const message  = `Resource Not Found . Invalid : ${err.path}`
        err = new allErrorsHandler(message , 400)
    }
    
    res.status(err.statusCode).json(
        {success:false, 
         message : err.message
        });
}

module.exports = allErrorsHandler;