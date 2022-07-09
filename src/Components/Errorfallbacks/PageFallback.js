import React from 'react';
import ErrorView from '../ErrorView';

class PageFallback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    const {children} = this.props;
    const {hasError} = this.state;

    if (hasError) {
      return <ErrorView errorType="large" />;
    }

    return <>{children}</>;
  }
}

export default PageFallback;
