
//database
const user ={
    username: "sakshi",
    password :"sakshi"
}

//with fetch api later
export const fakeAuthApi = (username ,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //is done on server
            //server calls db to get data
            //and then return based on DB result

     if(user.username === username && user.password === password)
        {
           resolve({success:true , status :200})
        }
            reject({success:false , status:401})
        },3000)
    })
}