import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Noodle from './components/Card'
import Jumbo from './components/Jumbotron'
import logo from './ferret_noodle.png';
import icon from './insta.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <hr />
          NOODLELAND!!!
        </p>
        
        
        <p><img src={icon} className="App-icon" alt="icon" /></p>
        
        <p>
        <Noodle> </Noodle> 
        </p>

         <Jumbo fluid>
            
          </Jumbo>

        
      </header>
    </div>
  );
}

export default App;
