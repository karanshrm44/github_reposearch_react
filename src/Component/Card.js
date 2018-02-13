import React from 'react';
import './Card.css';


const Card=(props)=>{

 

   
    return(
        <div className="Card">
        <img style={{float:"center"}} src={props.image} width="40%" height="20%" />
        <p >Name: {props.name} </p>
        <p>Language: {props.language} </p>
        <p>Score: {props.score} </p>
        <p>Star: {props.stars} </p>
        <p>Updated_At: {props.updated_at} </p>
        <p>Created_At: {props.created_at} </p>

        </div>
        
          )
} 


export default Card;