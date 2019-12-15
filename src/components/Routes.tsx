import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Automotive from 'src/pages/Automotive';
import DeliveryOptions from 'src/pages/DeliveryOptions';
import Home from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';
import Portraits from 'src/pages/Portraits';
import Rates from 'src/pages/Rates';
import RealEstate from 'src/pages/RealEstate';
import Weddings from 'src/pages/Weddings';

// Components
import ScrollToTop from './ScrollToTop';

const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/automotive" component={Automotive} />
        <Route path="/delivery-options" component={DeliveryOptions} />
        <Route path="/portraits" component={Portraits} />
        <Route path="/rates" component={Rates} />
        <Route path="/real-estate" component={RealEstate} />
        <Route path="/weddings" component={Weddings} />
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default Routes;
