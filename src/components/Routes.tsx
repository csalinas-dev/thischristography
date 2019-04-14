import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';

// Pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Rates from '../pages/Rates';

class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rates" component={Rates} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
