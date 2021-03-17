import React from 'react';

export default function Navbar(props) {
  const options = Object.keys(props).map((href, index) => <li key={index} ><a className="nav-link" href={"#" + href}>{props[href]}</a></li>)

  return (
    <nav className="navbar navbar-expand navbar-light fixed-bottom">

      <ul className="navbar-nav ml-auto" id="navbar">
        {options}
      </ul>
    </nav>
  )
}
