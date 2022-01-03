import React from 'react';
import Form from "./Form"
const Recipe = ()=>{
 let dal = "dal"
 
   function change(){
      
   }

return(
        <>
        <div style={{display:"flex"}}>
        <Form/>
        <div style={{marginLeft:"700px",width:"500px"}}>
        <div style={{display: 'block',}}>
        <h3 style={{color:'#ECB365',backgroundColor: '#041C32',alignItems:"right"}}>Dal makhni <button style={{marginLeft:"40%",backgroundColor:"#ECB365"}}>details</button></h3>
        </div>
        <div style={{display: 'block'}}>
        <h3 style={{color:'#ECB365',backgroundColor: '#041C32',alignItems:"right"}}>paneer tikka <button style={{marginLeft:"40%",backgroundColor:"#ECB365"}}>details</button></h3>
        </div>
        <div style={{display: 'block'}}>
        <h3 style={{color:'#ECB365',backgroundColor: '#041C32',alignItems:"right"}}>mixed veg <button onClick={change} style={{marginLeft:"40%",backgroundColor:"#ECB365"}}>details</button></h3>
        </div>
        </div>
        </div>
        <div style={{backgroundColor: '#041C32',color:"#ECB365"}}>
            <h1>Recipe Information</h1>
            <img style={{width: "200px"}} src="https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Dal-Makhani.jpg" alt="dal Makhni"/>
            <h3>ingredients</h3>
            
            <li>{dal}</li>
            <li>salt</li>
            <li>chili</li>

            <h3>time</h3>
            <li>30 Min</li>

            <p>his Punjabi special is made with rajma, sabut urad dal, onions, tomatoes and a healthy dose of whole and powdered spices, but the main ingredients are clearly butter and cream. The richness of the butter cuts through all the spice and turns what would have been a simple pulse curry into this rich creamy dal. Serve piping hot with paranthas.</p>
        </div>

        </>
       
    )
}

export default Recipe