import * as React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
  public render() {
    return (
      <footer className="py-5">
        <div className="container d-flex flex-column align-items-center">
          <nav className="navbar">
            <Link className="navbar-brand" to="/">
              <img src="/assets/logos/icon.png" alt="This Christography Icon" className="d-inline-block d-md-none align-top" height="54" />
              <img src="/assets/logos/logo.png" alt="This Christography Logo" className="d-none d-md-inline-block align-top" height="54" />
            </Link>
            <Link className="nav-link" to="/rates">Rates</Link>
          </nav>
          <small><i className="far fa-copyright" /> 2019 This Christography. All Rights Reserved.</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
