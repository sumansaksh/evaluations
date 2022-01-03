const express = require('express');

const User = require('../model/user.model')
const router = express.Router()

router.post('/',async(req,res)=>{
 try{

    const movie = await Movie.create(req.body);
    res._construct(movie)

 }catch(e){
return res.status(500).json({status:Failed,message: e.message})
 }
})
