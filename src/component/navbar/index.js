import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to="/aboutme"><h2>About Me</h2></Link>
        <Link to="/projects"><h2>Projects</h2></Link>

      </div>
    );
  }
}//nope

export default Navbar;
