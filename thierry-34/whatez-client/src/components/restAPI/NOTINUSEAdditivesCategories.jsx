//FRONTEND OPTION FOR THIRD PARTY API,  NOT RECOMMENDED !

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// const cors = require("cors");
// const corsMiddleware = cors();

// const axios = require("axios")

export default class AdditivesCategories extends Component {
  state ={
    additivesCategories: []
  }
  componentDidMount(){
    // axios.use(cors())
    axios({
      "method":"GET",
      "url":"https://vx-e-additives.p.rapidapi.com/categories",
      // "crossdomain": 'true' ,
      "headers":{
        // 'Access-Control-Allow-Origin': '*',
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"vx-e-additives.p.rapidapi.com",
      "x-rapidapi-key":"592be0ac5emsh1f2a31abf42d2e4p15ee76jsnf519e97b2684",          // CORS Policy messing it up. Sometimes fetching, sometimes not.
      // 'Access-Control-Allow-Origin': '*'
      },"params":{
      "sort asc":"id"
      }
      })
      .then(response => {
        console.log(`=========>> logging response from get in Categories:`,response)
        this.setState({
          additivesCategories: response.data.slice(0, 10)
        })
      })
      .catch((error)=>{
        console.log(error)
      })    
  }
  render() {
    const {additivesCategories} = this.state;
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
      <div className="center">No additive categories loaded yet</div>
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
}