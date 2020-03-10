'user strict';

import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };

    this.timer;
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.setState({ time: this.state.time + 1 });
    // }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('willUpdate', this.props, nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate', this.props, prevProps);
  }

  render() {
    return <div>Timer: {this.state.time}</div>;
  }
}

export default Timer;
