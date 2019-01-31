import React from "react";
import ReactDOM from 'react-dom';
import CubeInput from './components/Input/Input.js';
import Cube from "./components/Cube/Cube.js";
import Style from './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            currentFilledCube:  0,
        };

        // this.setNumber = this.setNumber.bind(this);
    }

    componentDidMount() {
        this.fillCube(0, this.state.val);
        this.setFilledCube();
        this.changeCubeFilled();
    }

    fillCube(min, max) {
        var filledCube = Math.floor(Math.random() * Math.floor(max));
        this.setState({currentFilledCube: filledCube});
    }

    renderCube() {
        const numberOfCubes = [];
        for (let i = 0; i < this.state.val; i++) {
            numberOfCubes.push(<Cube key={i} dataId={i} onClick={this.changeCubeFilled} />) ;
        }
        return numberOfCubes;
    }

    setFilledCube() {
        var selectedCube = document.querySelector('[data-id="' + this.state.currentFilledCube + '"]');
        if (selectedCube) {
            selectedCube.classList.add('filled');
        }
    }

    changeCubeFilled() {
        var allCubes = document.querySelectorAll(".mainCube");

        for (let i = 0; i < allCubes.length; i++) {
            allCubes[i].addEventListener("click", function() {
                (document.querySelector(".mainCube.filled")).classList.remove("filled");
                
                this.fillCube(0, this.state.val);
                this.setFilledCube();
            }.bind(this));
        }
    }

    setNumber(event) {
        if((event.target.value % 5 === 0) ) {
            console.log("yes");
            this.setState({
                val: event.target.value,
            });
            // console.log(thi)
            // console.log(event.target.value);
            // console.log(this.state.val)
            
            // {this.renderCube()}
            // console.log("this this this")
        
        } else {
            console.log("nothing yet")
        }
    }

    inputCube() {
        if(this.state.val === '' || this.state.val === 0) {
            return (
                <form>
                <label className="cubeLabel" htmlFor="name">Enter a number <br /> (any number that is multiples by 5)
                    <input type="text" className="cubeNumber" onChange={this.setNumber}/>
                </label>    
            </form>
            )
        }
    }

    render() {
        return (
            <div className="containerDiv" >
                {/* {this.renderCube()}  */}
                {/* <CubeInput  /> */}
                {this.inputCube()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("index"));