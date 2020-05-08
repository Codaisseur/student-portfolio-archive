import React from "react";
import { NavLink } from "react-router-dom";


export default function CategoryDetails(props) {
  
  const additivesCategory = props.category ? (
    <div className="additivesCategory card teal lighten-5">
      <div className="card-content ">
        <h4 className="card-title red-text">{props.category.name}</h4>
        <br></br>
        <p>{props.category.description}</p>
        <br></br>
        <button className="btn pink lighten-1 z-depth-0"><NavLink to="/info" style={{color:'white'}}>back</NavLink></button>
        <br></br>
        <p>__________________________________________________</p>
        <button className="btn red darken-3 z-depth-0"><NavLink to="/additives" style={{color:'white'}}>not enough, show me everything !</NavLink></button>
      </div>
    </div>
  ) : (
    <div className="center">Loading additives category...</div>
  )
  return (

      <div className='container'>
        <h4 className="center">Category description</h4>
        {additivesCategory}
      </div>
    
  )
}


     