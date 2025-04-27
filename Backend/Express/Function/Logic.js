let user = require("../Collection/User")

let main_function = {
    home:async function (req,res){
     res.send("Home Page")
     res.end();
    },
    register_user:async function (req,res){
       try{
        let {name,age,gender,phone_no,address} =req.body;
        let checkPhone = await user.findOne({phone_no:phone_no})
        if(checkPhone){
        return res.status(409).json({msg:"Phone no Already exist"})
        }
        else{
            let patient_data = new user({
                name,
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
  
    }
}
module.exports = main_function