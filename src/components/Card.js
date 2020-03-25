import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Noodle() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/noodle.jpg" />
            <Card.Body>
              <Card.Title>Ferret</Card.Title>
              <Card.Text>
              Am Noodle. 
              </Card.Text>
              <Button variant="primary" href="https://www.instagram.com/landofnoodle/">Submit to my cuteness</Button>
            </Card.Body>
            </Card>
    )
}

export default Noodle