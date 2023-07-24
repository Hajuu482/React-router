import React from "react";

import './App.css'
import { NavLink } from "react-router-dom";

function Header() {

  return <div className="header">

    <h2>Router </h2>

    <ul>

      <li> <NavLink to="/"> Home</NavLink> </li>
      <li> <NavLink to="/Feature">Feature</NavLink> </li>
      <li> <NavLink to="/About">About</NavLink> </li>
      <li> <NavLink to="/Blog">Blog</NavLink> </li>
    
    </ul>

    
    
  </div>
   
}

export default Header;