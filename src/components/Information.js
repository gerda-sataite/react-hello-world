import React from 'react'
import Attribute from './Attribute'

function Information(props) {
    return (
        <div>
            <Attribute title="Age" value={props.age} />
            <Attribute title="Nationality" value={props.nationality} />
            <Attribute title="Personality" value={props.personality} />
        </div>
    )
}

export default Information