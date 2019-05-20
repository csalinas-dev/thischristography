import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Automotive from 'src/pages/Automotive';
import DeliveryOptions from 'src/pages/DeliveryOptions';
import Album from 'src/pages/Galleries/Album';
import Galleries from 'src/pages/Galleries/index';
import Home from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';
import Portraits from 'src/pages/Portraits';
import Rates from 'src/pages/Rates';
import RealEstate from 'src/pages/RealEstate';
import Weddings from 'src/pages/Weddings';

// Components
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

class Routes extends React.Component {
  public render() {
    return (
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
            <Route path="/galleries" exact={true} component={Galleries} />
            <Route path="/galleries/:album" component={Album} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
