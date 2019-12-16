import React from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component<RouteComponentProps<any, StaticContext, any>> {
  public componentDidUpdate(prevProps: RouteComponentProps<any, StaticContext, any>) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  public render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
