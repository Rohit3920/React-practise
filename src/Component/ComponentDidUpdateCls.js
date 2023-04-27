import { Component } from "react";
import { Button } from "react-bootstrap";


class ComponentDidUpdateCls extends Component {
    constructor() {
        super();
        console.warn("Component Did Update, Constructor");
        this.state = {
            count: 0,
        }
    };

    componentDidUpdate(preProps, preState, snapshot) {
        console.log("ComponentDidUpdate call", preState.count, this.state.count)

        preState.count === this.state.count && alert("data is already same")

    }

    render() {
        console.warn("Component Did Update, Render Call")

        return (
            <div>
                <h3>Component Did Update, Life Cycle Method // count: {this.state.count}</h3>

                <p>Open Console Warn to show this result  <br /> 
                    frist Call :- Constructor <b>One Time</b>; <br /> 
                    second call :- Render ; <br /> 
                    third call :-  componentDidUpdate
                </p>

                <Button onClick={()=> {this.setState({count:1})}}>Update state</Button>
            </div>
        )
    }

}

export default ComponentDidUpdateCls;