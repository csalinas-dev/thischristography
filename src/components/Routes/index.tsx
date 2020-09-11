import About from 'pages/About';
import Automotive from 'pages/Automotive';
import Contact from 'pages/Contact';
import Galleries from 'pages/Galleries';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Portraits from 'pages/Portraits';
import Pricing from 'pages/Pricing';
import Prints from 'pages/Prints';
import React, { useReducer } from 'react';
import ScrollToTop from './ScrollToTop';
import Weddings from 'pages/Weddings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { ImageViewerReducer } from 'containers/ImageViewer/reducer';
import { initialImageViewerState } from 'containers/ImageViewer/state';

const Routes = () => {
  const [state, dispatch] = useReducer(ImageViewerReducer, initialImageViewerState);

  return (
    <Router>
      <ImageViewerContext.Provider value={{ state, dispatch }}>
        <ScrollToTop>
          <Switch>
            <Route component={Home}       path="/" exact={true} />
            <Route component={About}      path="/about" />
            <Route component={Automotive} path="/automotive" />
            <Route component={Contact}    path="/contact" />
            <Route component={Galleries}  path="/galleries" />
            <Route component={Portraits}  path="/portraits" />
            <Route component={Pricing}    path="/pricing" />
            <Route component={Prints}     path="/prints" />
            <Route component={Weddings}   path="/weddings" />
            <Route component={NotFound}   path="*"/>
          </Switch>
        </ScrollToTop>
      </ImageViewerContext.Provider>
    </Router>
  );
};

export default Routes;
