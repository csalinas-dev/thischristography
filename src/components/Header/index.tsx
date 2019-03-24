import * as React from 'react';
import './Header.css';

class App extends React.Component {
  public render() {
    return (
      <header>
        <a className="logo" href="/" />
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
    );
  }
}

export default App;
