import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <a
          className="App-link"
          href="https://www.instagram.com/landofnoodle/"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        <p><img src={icon} className="App-icon" alt="icon" /></p>
        
        <button href="https://www.instagram.com/landofnoodle/" type="submit">Submit to my cuteness</button>
          
        
         
        </a>
      </header>
    </div>
  );
}

export default App;
