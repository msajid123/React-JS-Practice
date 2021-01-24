import React from 'react';
import './state.css';
class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sajid",
      id: 37281,
      regno: 47928,
      city:"Islamabad"
    };
  }
  render() {
    return (
      <div>
      <hr/>
        <h1>My Name Is {this.state.name}</h1>
        <p>
        My ID No is {this.state.id} and My Reg No is {this.state.regno} and I Live in {this.state.city}.
        </p>
        <p>This Page is just for learning purpose.</p>
      </div>
    );
   }
}
export default State;