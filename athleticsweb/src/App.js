import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home'
import DetailsPost from './components/DetailsPost';

class App extends Component {

  constructor(props){
    super(props);
    console.log('constructor')
  }

  render() {
    return (
        <BrowserRouter>
          <Route path="/" exact component={Home}/>
          <Route path="/post/:id" exact component={DetailsPost}/>
        </BrowserRouter>
    )
  }

}






// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">à
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
