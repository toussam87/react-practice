import React, { Component } from "react";
import Style from './Input.css'

const CubeInput = (props) => {
    return(
        <div>
            <form>
                <label className="cubeLabel" htmlFor="name">Enter a number <br /> (any number that is multiples by 5)
                    <input type="number" className="cubeNumber" onChange={props.setNumber} value={props.value} />
                </label>    
            </form>
            
        </div>
    );
}

export default CubeInput;
