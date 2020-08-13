import React from 'react';
import displaypic from "../images/displaypic.png";

export default function PlayerDisplay(props) {
    return(
        <>
            <img src={displaypic} alt="Display Pic" width="60" height="100"/>
            <h4>{props.name}</h4>
        </>
    )
}

