import About from 'pages/About';
import Automotive from 'pages/Automotive';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import Artwork from 'pages/Artwork';
import NotFound from 'pages/NotFound';
import Portraits from 'pages/Portraits';
import Pricing from 'pages/Pricing';
import React, { useReducer } from 'react';
import RealEstate from 'pages/RealEstate';
import ScrollToTop from './ScrollToTop';
import Weddings from 'pages/Weddings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { ImageViewerReducer } from 'containers/ImageViewer/reducer';
import { initialImageViewerState } from 'containers/ImageViewer/state';
import DeliveryOptions from 'pages/DeliveryOptions';

const Routes = () => {
  const [state, dispatch] = useReducer(ImageViewerReducer, initialImageViewerState);

  return (
    <Router>
      <ImageViewerContext.Provider value={{ state, dispatch }}>
        <ScrollToTop>
          <Switch>
            <Route component={Home}            path="/" exact={true} />
            <Route component={About}           path="/about" />
            <Route component={Automotive}      path="/automotive" />
            <Route component={Contact}         path="/contact" />
            <Route component={DeliveryOptions} path="/delivery-options" />
            <Route component={Artwork}         path="/artwork" />
            <Route component={Portraits}       path="/portraits" />
            <Route component={Pricing}         path="/pricing" />
            <Route component={RealEstate}      path="/real-estate" />
            <Route component={Weddings}        path="/weddings" />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </ImageViewerContext.Provider>
    </Router>
  );
};

export default Routes;
