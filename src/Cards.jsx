import React from "react";

function Card(props)
{
    return(
       <>
     
        <div className="cards">
        <div className='card'> 
        <img className="kgf" src={props.imgsrc} alt="it is a movie poster"></img>
        <h3>{props.sname}</h3>
        <button className="btn"> <a href={props.link} >WATCH NOW </a></button>
        </div>
         </div>
      </>
    )
} 
export default Card;
