let exp = require("express")
let func = require("../Function/Logic")

let route = exp.Router()

route.get("/h",func.home);
route.post("/reg",func.register_user);

module.exports = route

