import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Portraits from 'pages/Portraits';
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
            <Route path="/" exact={true} component={Home} />
            <Route path="/portraits" component={Portraits} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </ImageViewerContext.Provider>
    </Router>
  );
};

export default Routes;
