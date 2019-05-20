import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  public render() {
    return (
      <header>
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light bg-white container">
            <Link className="navbar-brand" to="/">
              <img src="/assets/logos/icon.png" alt="This Christography Icon" className="d-inline-block d-md-none align-top" height="54"/>
              <img src="/assets/logos/logo.png" alt="This Christography Logo" className="d-none d-md-inline-block align-top" height="54"/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/portraits">Portraits</Link>
                <Link className="nav-item nav-link" to="/weddings">Weddings</Link>
                <Link className="nav-item nav-link" to="/automotive">Auto</Link>
                <Link className="nav-item nav-link" to="/real-estate">Real Estate</Link>
                <Link className="nav-item nav-link" to="/galleries">Galleries</Link>
                <span className="flex-grow-1" />
                <span className="social">
                  <a className="nav-item nav-link" href="https://instagram.com/ThisChristography" target="_blank"><i className="fab fa-instagram" /></a>
                  <a className="nav-item nav-link" href="https://twitter.com/TChristography" target="_blank"><i className="fab fa-twitter" /></a>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
