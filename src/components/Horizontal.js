import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Horizontal(props) {
    return (
        <ListGroup horizontal>
        <ListGroup.Item>{props.item1} </ListGroup.Item>
        <ListGroup.Item>{props.item2}</ListGroup.Item>
        <ListGroup.Item>{props.item3}</ListGroup.Item>
        <ListGroup.Item>{props.item4}</ListGroup.Item>
        </ListGroup>
    )
}


export default Horizontal