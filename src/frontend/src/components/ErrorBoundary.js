import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    alert("getDerivedStateFromError")
    return { hasError: true };
  }

  componentDidCatch(error) {
    alert("componentDidCatch")
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Unable to load the Content...
            <br />
          Please refresh the page and try again...!
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;