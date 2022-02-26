const express = require ("express")
const route = express.Router()

route.get("/",function(req,res){
      res.status(200).send({
      title:"Seja Feliz",
      version:"1.3.9"

      })
})

module.exports=route