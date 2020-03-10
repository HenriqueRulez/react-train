'use strict';
import React, { Component } from 'react';

import Timer from './timer';

// ES6
class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 'green',
      showTimer: true,
      time: 0
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('didMount');
    setTimeout(() => {
      this.setState({
        color: 'magenta'
      });
    }, 500);
  }

  render() {
    return (
      <div>
        {this.state.showTimer && <Timer time={this.state.time} />}
        <button
          onClick={() =>
            this.setState({
              time: this.state.time + 1
            })
          }
        >
          change props
        </button>
        {/* <Square color={this.state.color} />
        {['red', 'green', 'blue'].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))} */}
      </div>
    );
  }
}

/* ES5
const App = React.createClass({
  render() {
    return (
      <div>
        <Title name="Pedroca" last="Pipoca" />
      </div>
    );
  }
});
*/

export default App;
