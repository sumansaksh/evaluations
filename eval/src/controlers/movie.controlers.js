const express = require("express");
////////////////////////////////const movie = require("../models/movie.model");
const Movie  = require("../models/movie.model")
const router = express.Router()



router.post("/",async (req, res)=>{
    try{
        const movie = await Movie.create(req.body);
        res.send(movie)
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }
})

router.get("/",async (req, res)=>{
    try{
        const movie = await Movie.find().lean().exec() ;
        res.send(movie)
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }
})

//////////////////////////////actor///////////////////////
router.get("/:actor",async (req, res)=>{
    try{
        const movie = await Movie.find(req.params.id).lean().exec();
        res.send(movie)
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }
})





module.exports = router
