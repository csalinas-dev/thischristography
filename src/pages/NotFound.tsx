import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class NotFound extends React.Component {
  public render() {
    return (
      <div className="not-found">
        <Header />
        <main>
          <section className="container">
            <h1>Page Not Found</h1>
            <p>The page you are trying to does not exist.</p>
            <Link to="/">Back to Home</Link>
          </section>
        </main>
      </div>
    )
  }
}

export default NotFound;
