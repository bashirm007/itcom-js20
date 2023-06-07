import React from 'react';
import './ToggleButton.css'

const ToggleButton = (props) => {
    const classes = ["ToggleButton"];
    if(props.showPeople) {
        classes.push('Red')
    }
    return (
        <div className="text-center">
            <button onClick={props.togglePeople} className={classes.join(' ')}>Show People</button>
        </div>
    );
};

export default ToggleButton;