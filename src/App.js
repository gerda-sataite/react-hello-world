import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Noodle from './components/Card';
import Jumbo from './components/Jumbotron';
import Horizontal from './components/Horizontal';
import ListGroup from './components/Dislikes';
import Information from './components/Information'
import Music from './components/Music';
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
            <h1>
              NOODLELAND!!!
            </h1>
            <p> <Noodle> </Noodle> </p>
            <p><Music /></p>
          </div>

          <div class="column">
            <p><Jumbo> </Jumbo> </p>
            <p><b>Likes: </b> </p>
            <p><Horizontal
              item1="Bite toes"
              item2="Eat"
              item3="Sleep"
              item4="Being a little rascal">
            </Horizontal>
            </p>

            <p><b>Dislikes: </b></p>
            <p><ListGroup
              item1="Being good"
              item2="Using the litterbox"
              item3="Salmon oil"
              item4="Eggs">
            </ListGroup>
            </p>
          </div>

          <div class="column">
            <p><img src={icon} className="App-icon" alt="icon" /></p>
            <p><Information
              age='8 months'
              nationality="Noodlish"
              personality='Danger'
              powers='Invulnerability'
            />
            </p>

          </div>

        </div>




      </header>
    </div>
  );
}

export default App;
