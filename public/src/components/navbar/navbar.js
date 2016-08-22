import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Search from '../search/search';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar-container">
        <nav id="navbar">
          
          <div id="navbar-logo-full">
            <img id="navbar-logo-image" src="../../../style/images/spotify_logo_white.png"></img>
          </div>

          <div id="navbar-logo-partial">
            <img id="navbar-logo-image" src="../../../style/images/spotify_icon_white.png"></img>
          </div>

          <div id="navbar-search">
            <Search />
          </div>
        </nav>
      </nav>
    )
  }
}

export default Navbar;
