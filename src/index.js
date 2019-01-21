import React from "react";
import ReactDOM from 'react-dom';
import Cube from "./components/Cube.js";
import Style from './index.css'
import { isNullOrUndefined } from "util";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 25,
            currentFilledCube:  5,
        }
    }

    componentDidMount() {
        this.fillCube(0, this.state.val);
    }

    fillCube(min, max) {
        var newFilledCube = Math.floor(Math.random() * Math.floor(max));
        this.setState({currentFilledCube: newFilledCube});
    }

    renderCube() {
        const numberOfCubes = [];
        for (let i = 0; i < this.state.val; i++) {
            numberOfCubes.push(<Cube key={i} dataId={i} />) ;
        }
        return numberOfCubes;
    }

    setFilledCube() {
        var selectedCube = document.querySelector('[data-id="' + this.state.currentFilledCube + '"]');
        // console.log("cube", selectedCube);
        if (selectedCube) {
            selectedCube.classList.add('filled');
        }
    }

    render() {
        console.log(this.state.currentFilledCube);
        this.setFilledCube();
        return (
            <div className="containerDiv" >
                {this.renderCube()}
                {/* {this.setFilledCube()} */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("index"));