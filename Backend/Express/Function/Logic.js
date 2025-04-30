let user = require("../Collection/User")

let main_function = {
    home:async function (req,res){
     res.send("Home Page")
     res.end();
    },
    register_user:async function (req,res){
       try{
        let {name,email,age,gender,phone_no,address} =req.body;
        let checkEmail = await user.findOne({email:email})
        if(checkEmail){
        return res.status(409).json({msg:"Email Already exist"})
        }
        else{
            let patient_data = new user({
                name,
                email,
                age,
                gender,
                phone_no,
                address,
                
            });
            
            let create = await patient_data.save();
            res.status(200).json({msg:"Patient Register Sucessfully"})
        }
       }catch(error){
        res.status(501).json({msg: error.message})
       }
  
    },
    get_user :async function(req,res){
        try {
            let getdata = await user.find()
            return res.status(201).json(getdata)
        } catch (error) {
         res.status(501).json({msg: error.message})
        }
    }
}
module.exports = main_function