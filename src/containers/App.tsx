import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route component={NotFound} />
        <Footer />
      </Router>
    );
  }
}

export default App;
