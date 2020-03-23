
import React, { Component } from 'react';

interface propTypes {
  setRef(arg: any): void,
}

const defaultProps: propTypes = {
  setRef: () => null,
};

class Example extends Component<propTypes> {
  static defaultProps = defaultProps;

  static exampleInstance: Example;

  static show() {
    console.log('!!!show', {  });
  }

  componentDidMount() {
    const { setRef } = this.props;
    setRef(this);
  }

  componentWillUnmount() {
    const { setRef } = this.props;
    setRef(null);
  }

  render() {
    return null;
  }
}

export default Example;
