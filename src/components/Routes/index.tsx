import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
// import Automotive from 'pages/Automotive';
// import DeliveryOptions from 'pages/DeliveryOptions';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
// import Portraits from 'pages/Portraits';
// import Rates from 'pages/Rates';
// import RealEstate from 'pages/RealEstate';
// import Weddings from 'pages/Weddings';

// Components
import ScrollToTop from './ScrollToTop';

const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/automotive" component={Automotive} />
        <Route path="/delivery-options" component={DeliveryOptions} />
        <Route path="/portraits" component={Portraits} />
        <Route path="/rates" component={Rates} />
        <Route path="/real-estate" component={RealEstate} />
        <Route path="/weddings" component={Weddings} />*/}
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default Routes;
