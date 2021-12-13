
const express = require("express");
const User = require("../models/users.models");
const router = express.Router()



router.post("/",async (req, res)=>{
    try{
        const user = await User.create(req.body);
        res.send(user)
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }
})





module.exports = router
