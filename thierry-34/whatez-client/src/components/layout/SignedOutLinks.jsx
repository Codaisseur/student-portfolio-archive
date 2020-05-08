import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedOutLinks() {
  return (
    <ul className="right">
      <li><NavLink to='/signup'>Sign Up</NavLink></li>
      <li><NavLink to='/login'>Log In</NavLink></li>
    </ul>
  )
}
