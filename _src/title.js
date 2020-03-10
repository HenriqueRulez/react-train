"user strict";

import React from "react";

/* Pure Function */
const Title = props => {
  return <h1> Olá {`${props.name} ${props.last}`}</h1>;
};

// const Title = React.createClass({
//   getDefaultProps() {
//     return {
//       name: "Usuário"
//     };
//   },

//   render() {
//     return <h1>Olá {this.props.name}!</h1>;
//   }
// });

export default Title;
