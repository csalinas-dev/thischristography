import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StaticContext } from 'react-router';

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
