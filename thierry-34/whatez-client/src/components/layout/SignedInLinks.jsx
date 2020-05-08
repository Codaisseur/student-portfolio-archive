/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from "../../actions/usersActions";
    
function SignedInLinks(props) {
  
  const handleLogOut = () => {
    console.log(`props are:`,props)
    // alert('you logged out')
    props.dispatch(logOut());
    // history.push('/')
  };

  const {user} = props
  console.log(`user status:`, user)
  console.log(`props status:`, props)
  const identification = user.user ? <Link to='/info'>{user.user.email}</Link> : <Link to='/info'>nono</Link>
  return (
    <ul className='right'>
      <li><a onClick={handleLogOut}>{identification}</a></li>
      <li><NavLink to='/photo' className='btn btn-floating pink lighten-1'><i className="material-icons">add_a_photo</i></NavLink></li> 
      <li><NavLink to="/chart">Your chart</NavLink></li> 
      <li><NavLink to="/info">Info</NavLink></li>
      <li></li>
    </ul>
  )
}
const mapStateToProps = (state) => {
  // console.log(`state in here:`,state)
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(SignedInLinks);