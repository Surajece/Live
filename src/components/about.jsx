import React from "react";
import Devanshe from "../assets/Devanshe sharma.jpeg"
import Bandita from "../assets/Bandita Singh.jpg"
import Suraj from "../assets/Suraj Sharma.jpeg"
import Vedansh from "../assets/vedansh.jpeg"

import "../styles/about.scss"


 const about = ()=>{
   const imageStyle = {
      width: '250px',    // Set the width of the image
      height: 'auto',    // Maintain the aspect ratio
    };
   return(
   <>
    <h2>Meet our Team</h2>
         <div class="card-container">
             <div class="card">
                 <img src={Devanshe} alt="Image 1" style={imageStyle}/>
                 <h2>Devanshe Sharma</h2>
                 <p>Code is like poetry. When you have to explain it, it's bad.</p>
             </div>
         <div class="card">
            <img src={Bandita} alt="Image 2" style={imageStyle}/>
            <h2>Bandita Singh</h2>
            <p>Living, Laughing and Slightly Caffeinated.</p>
         </div>
         <div class="card">
            <img src={Suraj} alt="Image 3" style={imageStyle} />
            <h2>Suraj Sharma</h2>
            <p>Read environment & try to adjust into it.</p>
         </div>
         <div class="card">
            <img src={Vedansh} alt="Image 3" style={imageStyle}/>
            <h2>Vedansh Singh</h2>
            <p>Life: A choose-your-path odyssey, no manual included.</p>
         </div>
    </div>
  
   </> 
   );

  
};

export default about;