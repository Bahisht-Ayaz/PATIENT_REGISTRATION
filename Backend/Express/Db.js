let mongo = require("mongoose")
require("dotenv").config();

let atlas_url = process.env.URL;
let Db_connect = async () => {
    mongo.connect(atlas_url).then(()=>{
        console.log("Connection has been built successfully")
    }).catch((e)=>{
        console.log(e)
    })
}
module.exports = Db_connect;