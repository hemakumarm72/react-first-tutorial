import React from 'react';
import './navbar.css';

function navbar() {
  return (
    <Navmenu />
  );
}

// array of data
const navmenudata = [
  {
    menu: 'Home',
    link: '/',

  },
  {

    menu: 'News',
    link: '/news',

  },
  {
    menu: 'Contact',
    link: '/contact',

  },
  {
    menu: 'About',
    link: '/about',

  },

  {
    menu: 'State',
    link: '/state',

  },

  {
    menu: 'Toggle',
    link: '/toggle',

  },
];

const Navmenu = () => (
  <div className="navbar">

    <ul>

      {navmenudata.map((d) => (

        <li>

          <a href={d.link} className={window.location.pathname === d.link ? 'active' : ''}>{d.menu}</a>
        </li>

      ))}
    </ul>

  </div>
);

export default navbar;
