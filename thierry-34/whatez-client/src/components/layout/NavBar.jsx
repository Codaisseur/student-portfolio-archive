import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

function NavBar(props) {
  const {user} = props
  
  console.log(`user status:`, user)
  const links = user.user.token ? <SignedInLinks/> : <SignedOutLinks/>
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className='brand-logo left'>What Ez</Link>
        {links}
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => {
  // console.log(`state in here:`,state)
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(NavBar)