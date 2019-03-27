import * as React from 'react';
import './Footer.css';

class Footer extends React.Component {
  public render() {
    return (
      <footer>
        <div className="container">
          <div className="social-media">
            <h3>Social Media</h3>
            <ul>
              <li>
                <a href="https://instagram.com/thischristography">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
