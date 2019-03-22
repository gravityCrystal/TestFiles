import React, { Component } from 'react';

export default class Hello extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log(this.props);
    const { name, call, inp } = this.props;
    return (
      <div>
        <input type="text" ref={inp} onChange={call} defaultValue={name} />
      </div>
    );
  };
}