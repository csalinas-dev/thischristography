import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';

// Pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Services from '../pages/Services';

class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/services" component={Services} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
