import React, { Component } from 'react';

class MyButton extends Component {
  render() {
    return (
      <button style={{ backgroundColor: this.props.color }}>
        Click me
      </button>
    );
  }
}

export default MyButton;
