import React from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { selectUser } from '../../store/user/selectors';
import Button from 'react-bootstrap/Button';
import logo from "../../images/logo-white.png";
import './landingpage.css';


export default function LandingPage() {
  const user = useSelector(selectUser);
  const button = user.name === null ? 'Sluit je aan' : 'Welkom terug';
  const to = user.name === null ? '/signup' : '/profile';

  return (
    <div className="landing-page">
      <div className="hero-image">
        <div className="img"></div>
        <div className="hero-text">
          <p>Voor en door...</p>
          <span className='schrijvers'>Schrijvers</span> <br/>
          <Button variant="success" as={NavLink} to={to}>{button}</Button> <br/>
          <img alt="" src={logo} width="100" height="100" />
        </div>
      </div>
    </div>
  );
}
