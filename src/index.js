import React from "react";
import ReactDOM from 'react-dom';
import Cube from "./components/Cube.js";
import Style from './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 25,
            fill: ''
        }
    }

    renderCube() {
        const numberOfCubes = [];
        for (let i = 0; i < this.state.val; i++) {
            numberOfCubes.push(<Cube key={i}/>);
        }
        return numberOfCubes;
    }

    render() {
        return (
            <div className="containerDiv" >
                {this.renderCube()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("index"));