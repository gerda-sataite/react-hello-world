import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Dislikes(props) {
    return (
      <div>
        <ListGroup>
        <ListGroup.Item>{props.item1}</ListGroup.Item>
         <ListGroup.Item>{props.item2}</ListGroup.Item>
         <ListGroup.Item>{props.item3}</ListGroup.Item>
          <ListGroup.Item>{props.item4}</ListGroup.Item>
        </ListGroup>
      </div>
    )
}

export default Dislikes