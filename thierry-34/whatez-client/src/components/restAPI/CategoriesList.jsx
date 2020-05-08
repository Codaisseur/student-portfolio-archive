import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesList(props) {
  const additivesCategories = props.categories;
  const additivesCategoryList = additivesCategories.length ? (
    additivesCategories.map(additivesCategory => {
      return (
        <div className="additivesCategory card teal lighten-5" key={additivesCategory.id}>
          <div className="card-content ">
            <Link to={'/info/' + additivesCategory.id}>
              <span className="card-title red-text">E {additivesCategory.category}'s</span>
            </Link>
            <p>{additivesCategory.name}</p>
            <p className="right">additives: {additivesCategory.additives}</p>
          </div>
        </div>
      )
    })
  ) : (
    <h1 className="center">Loading additives categories...</h1>
  )
  return (
    <div>
        <div className='container additivesCategories '>
          <h4 className="center">Additive Categories</h4>
          {additivesCategoryList}
        </div>
    </div>
  )
}
