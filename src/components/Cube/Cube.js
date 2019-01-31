import React, { Component } from "react";
import Style from './cube.css'

const Cube = (props) => {
    return(
        <div className="mainCube" data-id={props.dataId} ></div>
    );
}

export default Cube;
