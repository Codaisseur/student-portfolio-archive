//FRONTEND OPTION FOR THIRD PARTY API,  NOT RECOMMENDED !

import React, { Component } from 'react'
import axios from 'axios'

export default class AdditivesCategory extends Component {
  state ={
    additivesCategory: null
  }
  componentDidMount(){
    console.log(`=========>> PROPS in Category:`,this.props)

    let specificId = this.props.match.params.additivesCategory_id    
    
    axios({
      "method":"GET",
      "url":"https://vx-e-additives.p.rapidapi.com/categories/" + specificId,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"vx-e-additives.p.rapidapi.com",
      "x-rapidapi-key":"592be0ac5emsh1f2a31abf42d2e4p15ee76jsnf519e97b2684"
      },"params":{
      "locale":"en"
      }
      })
      .then(response => {
        this.setState({
          additivesCategory: response.data
        })
        console.log(`========>> RESPONSE IN CATEGORY FROM GET`,response)
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  render() {
    const additivesCategory = this.state.additivesCategory ? (
      <div className="additivesCategory">
        <h4 className="center">{this.state.additivesCategory.name}</h4>
        <p>{this.state.additivesCategory.description}</p>
      </div>
    ) : (
      <div className="center">Loading additives category...</div>
    )
    return (
      <div>
        <div className='container'>
          {additivesCategory}
        </div>
      </div>
    )
  }
}
