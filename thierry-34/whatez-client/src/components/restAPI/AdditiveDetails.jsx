import React from "react";
import { NavLink } from "react-router-dom";


export default function CategoryDetails(props) {
  
  const additive = props.additive ? (
    <div className="additivesCategory card teal lighten-5">
      <div className="card-content ">
        <h4 className="card-title red-text">E {props.additive.code}</h4>
        <br></br>
        <h5>name</h5><p> {props.additive.name}</p>
        <h5>function</h5><p> {props.additive.function}</p>
        <h5>status</h5><p className='red-text'> {props.additive.status}</p>
        <h5>food examples</h5><p> {props.additive.foods}</p>
        <h5>notice</h5><p className='red-text'> {props.additive.notice}</p>
        <h5>extra info</h5><p> {props.additive.info}</p>
        <br></br>
        <button className="btn pink lighten-1 z-depth-0"><NavLink to="/additives" style={{color:'white'}}>back to list</NavLink></button>
        <br></br>
      </div>
    </div>
  ) : (
    <div className="center">Loading Additive...</div>
  )
  return (

      <div className='container'>
        <h4 className="center">Additive description</h4>
        {additive}
      </div>
    
  )
}


     