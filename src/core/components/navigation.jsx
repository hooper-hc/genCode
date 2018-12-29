import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from '../components/buttons/svg/logo.svg';
import search from '../components/buttons/svg/search.svg';
import add from '../components/buttons/svg/add.svg';
import user from '../components/buttons/svg/user.svg';

// Landing page will eventually contain top constellations of the day or something similar. 
// At that time, the Search button will bring down a diagonal slide translucent search modal 
//    that looks like the one in the initial spec (including the advanced search option at the 
//    bottom)
// The plus button is here temporarily as a link to constellations
// The help button may or may not be in the final version, still deciding


class Navigation extends React.Component {

	constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-left">
			    <Link className="link" to="/"><img src={logo} /></Link>
          <Link className="link" to="/"><img src={search} /></Link>
          <Link className="link" to="/"><img src={add} /></Link>
        </div>
        <div className="nav-right">
          <Link className="link" to="/"><img src={user} /></Link>
        </div>    
      </div>
    );
  }
}

export default Navigation;
