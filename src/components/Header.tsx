import * as React from 'react';
import './Header.css';

class Header extends React.Component {
  public render() {
    return (
      <header>
        <div className="container">
          <a className="logo" href="/" />
          <nav>
            <a href="/">Home</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
