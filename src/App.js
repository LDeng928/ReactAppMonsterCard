import React, { Component } from "react";
//import logo from "./logo.svg";

//import cardlist component
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

//Render the HTML in a class
class App extends Component {
  constructor() {
    super();

    //state object
    this.state = {
      //an array of objects
      //Initial state will be an empty array
      monsters: [],
    };
  }

  //Make an API request to the database and retrive the data
  //Use componentDidMount life cycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      //Update the monsters object with the new users array
      .then((users) => this.setState({ monsters: users }));
  }

  //render menthod is built in within Reach component
  render() {
    return (
      <div className="App">
        <CardList name="Emily">
          {
            //Any code between CardList is props.children
            //render JavaScript
            //map function will iterate over the array of objects and return h1
            this.state.monsters.map((monster) => (
              //the id helps React to know which element it needs to update
              <h1 key={monster.id}>{monster.name}</h1>
            ))
          }
        </CardList>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
