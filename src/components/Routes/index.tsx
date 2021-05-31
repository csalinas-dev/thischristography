import About from 'pages/About';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Pricing from 'pages/Pricing';
import React, { useReducer } from 'react';
import ScrollToTop from './ScrollToTop';
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
            <Route component={Contact}    path="/contact" />
            <Route component={Pricing}    path="/pricing" />
            <Route component={NotFound}   path="*"/>
          </Switch>
        </ScrollToTop>
      </ImageViewerContext.Provider>
    </Router>
  );
};

export default Routes;
