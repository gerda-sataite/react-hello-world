import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Noodle from './components/Card';
import Jumbo from './components/Jumbotron';
import Horizontal from './components/Horizontal';
import ListGroup from './components/Dislikes';
import logo from './ferret_noodle.png';
import icon from './plz.PNG';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <p /> 
        <img src={logo} className="App-logo" alt="logo" /> 
        <p />
        
        <div class="grid">
          <div class="column">
            <p>
               NOODLELAND!!!
            </p> 
            <p> <Noodle> </Noodle> </p> 
          </div>

          <div class="column">
               <p><Jumbo fluid> </Jumbo> </p>
               <p> Likes: </p>
               <p><Horizontal item1="Bite toes" item2="Eat" item3="Sleep" item4="Being a little shit"> </Horizontal></p>
               <p> Dislikes: </p>
               <p><ListGroup item1="Being good" item2="Using the litterbox" item3="Salmon oil" item4="Eggs"> </ListGroup></p>
          </div>

          <div class="column">
            <p><img src={icon} className="App-icon" alt="icon" /></p>
            <p> </p>
            
          </div>      

        </div>

        
        

      </header>
    </div>
  );
}

export default App;
