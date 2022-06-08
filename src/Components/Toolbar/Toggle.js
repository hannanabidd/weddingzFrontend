import React from 'react';
import './toolbar.css';


const Toggle = props => (
    <button className="toggle-button" onClick={props.click}>
        <img src="/home/menu-hamburger.svg" alt="hamburger" />
    </button>
)

export default Toggle;