import React from 'react';
import { Button } from "./components/Button";
import './state.css';
class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         info: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {
      var name = " Sajid Is Here..."
      var ar = this.state.info.slice();
	    ar.push(name);
      this.setState({info: ar})
   };
   render() {
      return (
        <div>
        <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"
      >
        Home
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--success--solid"
        buttonSize="btn--large"
      >
        Contact Us
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--danger--outline"
        buttonSize="btn--medium"
      >
        Services
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--large"
      >
        Products
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--danger--solid"
        buttonSize="btn--large"
      >
        Info
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--success--outline"
        buttonSize="btn--medium"
      >
        FeedBack
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--warning--outline"
        buttonSize="btn--large"
      >
        Buy Now
      </Button>
       <hr/>
         <p>Press Button to Change State</p>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>Message: {this.state.info}</h4>
         </div>
      );
   }
}
export default App;