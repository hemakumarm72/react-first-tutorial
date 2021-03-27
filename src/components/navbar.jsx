import React from 'react';
import './navbar.css';

function navbar() {
  return (
    <div className="navbar">

      <ul>
        <li>
          {' '}
          <a href="#home" className="active">Home</a>
        </li>
        <li>
          {' '}
          <a href="#news">News</a>
        </li>
        <li>
          {' '}
          <a href="#contact">Contact</a>
        </li>
        <li>
          {' '}
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
