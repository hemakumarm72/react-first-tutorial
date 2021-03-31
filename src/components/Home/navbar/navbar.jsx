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
    mode: 'active',
  },
  {

    menu: 'News',
    link: '/News',
    mode: 'inactive',
  },
  {
    menu: 'Contact',
    link: '#Contact',
    mode: 'inactive',
  },
  {
    menu: 'About',
    link: '#link',
    mode: 'inactive',
  },
];

const Navmenu = () => (
  <div className="navbar">
    <>
      <ul>
        {navmenudata.map((d) => (

          <li>

            <a href={d.link} className={d.mode}>{d.menu}</a>
          </li>

        ))}
      </ul>
    </>
  </div>
);

export default navbar;
