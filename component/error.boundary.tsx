'use client';

import type { ReactNode } from 'react';
import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error) {
    // update state so the next render will show the fallback UI
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // you can use your own error logging service here
    console.log('Uncaught Error:', error, errorInfo);
  }

  public render() {
    // check if the error is thrown
    if (this.state.hasError) {
      // render any custom fallback
      return (
        <div>
          <h2>Oopsie daisy</h2>
          <button
            type='button'
            onClick={() => this.setState({ hasError: false })}
          >
            one more time?
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
