import React from 'react';
import "./styles.scss"
import {  Link } from "react-router-dom";
function Navbar() {
    return (
      <>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/sevices">
              <li>Services</li>
            </Link>
            <Link to="/news">
              <li>News</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </>
    );
}

export default Navbar;