import React from "react";
import { Link } from "react-router-dom";

export default function AdditivesList(props) {
  const additives = props.additives;
  const additivesList = additives.length ? (
    additives.map(additive => {
      return (
        <div className="additivesCategory card teal lighten-5" key={additive.code}>
          <div className="card-content ">
            <Link to={'/additives/' + additive.code}>
              <span className="card-title red-text">E {additive.code}</span>
            </Link>
            <span className="right black-text">{additive.name}</span>
          </div>
        </div>
      )
    })
  ) : (
    <h1 className="center">Loading additives ...</h1>
  )
  return (
    <div>
        <div className='container additives'>
          <h4 className="center">All Additives</h4>
          {additivesList}
        </div>
    </div>
  )
}
