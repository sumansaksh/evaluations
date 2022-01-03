import React from 'react';

const Form = ()=>{
   const handleSubmit=(e)=>{
       e.preventDefault();
       let title = document.getElementById("title");
       let ing = document.getElementById("ing");
       let time= document.getElementById("time");
       let image = document.getElementById("image");
       let instruction = document.getElementById("instruction");
   }

   const handleChange=(e)=>{
    
     }
    return(
        <>
       
        <form onSubmit={handleSubmit} style={{backgroundColor:"#041C32"}}>
        <h1>Form</h1>
        <input style={{backgroundColor:"#ECB365",marginLeft:"10px",marginRight:"10px"}}  id="title" name="title" placeholder="Title"  type="texttext"/><br/>
        <input style={{backgroundColor:"#ECB365",marginLeft:"10px",marginRight:"10px"}} id="ing" name="ing" placeholder="ingredients"   type=""/><br/>
        <input style={{backgroundColor:"#ECB365",marginLeft:"10px",marginRight:"10px"}} id="time" name="time" placeholder="time to cook"   type="number"/><br/>
        <input style={{backgroundColor:"#ECB365",marginLeft:"10px",marginRight:"10px"}} id="img" name="image" placeholder="image"   type=""/><br/>
        <input style={{backgroundColor:"#ECB365",marginLeft:"10px",marginRight:"10px"}} id="instruction" name="instruction" placeholder="instructions"   type="text"/><br/>
        <input style={{backgroundColor:"#ECB365",marginLeft:"10px",marginRight:"10px"}} type="submit"></input>
        </form>

        </>
       
    )
}

export default Form
