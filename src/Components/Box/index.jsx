import React from 'react';
import './box.css';
import { Link } from 'react-router-dom';
import LogoImage from '../../Assets/logo.png';

function Box(props) {
  const {
    showBack = true, showHeading, heading, children,
  } = props;

  return (
    <div className="box">
      <div>
        {showHeading && (
        <div className="heading">
          {showBack ? (
            <Link to="/"><i style={{ fontSize: 25 }} className="fas fa-arrow-left" /></Link>) : (
              <div />)}
          <h1>{heading}</h1>
          <div />
        </div>
        )}
        <div className="insideBox">
          <img src={LogoImage} alt="logo" />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Box;
