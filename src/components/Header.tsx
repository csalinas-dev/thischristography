import * as React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  public render() {
    return (
      <header>
        <div className="container">
          <Link className="logo" to="/" />
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
