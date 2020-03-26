import React from 'react';

function Attribute(props) {
    return (
        <p><b>{props.title}:</b> {props.value}</p>
    )
}

export default Attribute