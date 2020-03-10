'user strict';

import React, { Component } from 'react';

import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '1',
      checked: false
    };
  }

  componentDidUpdate() {
    console.log(this.state.value);
  }
  render() {
    return (
      <div>
        <form action=''></form>
      </div>
    );
  }
}

// const App = () => (

// );

export default App;

// <input
//   type='text'
//   value={this.state.value}
//   onChange={e => {
//     console.log(this.state.value);
//     this.setState({
//       value: e.target.value
//     });
//   }}
// />
// <label htmlFor='check'>
//   <input
//     type='checkbox'
//     name='check'
//     id='check'
//     checked={this.state.checked}
//     onChange={e => {
//       this.setState({
//         checked: !this.state.checked
//       });
//     }}
//   />
//   Checkbox
// </label>
// <input type='radio' name='rb' id='rb' value='1' />
// radio1
// <input type='radio' name='rb' id='rb2' value='2' />
// radio2

// <select
//   multiple
//   name='q'
//   id='q'
//   value={[this.state.value]}
//   onChange={e => {
//     this.setState({
//       value: e.target.value
//     });
//   }}
// >
//   <option value='1'>1</option>
//   <option value='2'>2</option>
//   <option value='3'>3</option>
// </select>
