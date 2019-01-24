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
        this.changeCubeFilled();
    }

    fillCube(min, max) {
        var newFilledCube = Math.floor(Math.random() * Math.floor(max));
        this.setState({currentFilledCube: newFilledCube});
    }

    renderCube() {
        const numberOfCubes = [];
        for (let i = 0; i < this.state.val; i++) {
            numberOfCubes.push(<Cube key={i} dataId={i} onClick={this.changeCubeFilled} />) ;
        }
        return numberOfCubes;
        console.log(this.state.currentFilledCube);
    }

    setFilledCube() {
        var selectedCube = document.querySelector('[data-id="' + this.state.currentFilledCube + '"]');
        if (selectedCube) {
            selectedCube.classList.add('filled');
        }
    }

    changeCubeFilled() {
        var allCubes = document.querySelectorAll(".mainCube");
        // var filledCube = document.querySelector(".mainCube.filled");
        var maxValue = this.state.val;

        console.log(this.state.currentFilledCube);
        // console.log(filledCube);

        for (let i = 0; i < allCubes.length; i++) {
            allCubes[i].addEventListener("click", function() {
                
                var newFilledCube = Math.floor(Math.random() * Math.floor(maxValue));
                this.setState({currentFilledCube: newFilledCube});
            }.bind(this));
        }
        
    }

    render() {
        this.setFilledCube();
        // this.changeCubeFilled();
        return (
            <div className="containerDiv" >
                {this.renderCube()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("index"));