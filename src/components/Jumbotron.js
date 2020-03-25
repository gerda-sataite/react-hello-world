import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Jumbo() {
    return (

        <Jumbotron fluid>
            <Container>
              <h1>Wonky noodle</h1>
              <p>
              Don't eat me.
              </p>
            </Container>
          </Jumbotron>

    )
}

export default Jumbo