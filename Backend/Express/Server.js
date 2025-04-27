let express = require("express");
let r = require("./Routing/Route");
let db = require("./Db");
let cors =require("cors");
let user = require("./Collection/User")

require("dotenv").config()
let port = process.env.PORT || 8002

let application = express();
application.use(cors());
application.use(express.json())
application.use("/PatientRegister/",r);

let datakaam = async function (){
  try{
  user.create({
    name:"Bahisht",
    age:20,
    gender:"female",
    phone_no:"03191398102",
    address:"karachi"

  })
  console.log("User Data Added Sucessfully");
  }catch(error){
    console.log(error);
  }
}


db().then(()=>{
    // datakaam();
    application.listen(port,()=>{
        console.log(`Server started at http://localhost:${port}/PatientRegister/`)
    })
}).catch((e)=>{
    console.log(e)
})