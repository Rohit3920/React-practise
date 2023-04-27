import { Component } from "react";
import { Button } from "react-bootstrap";


class ComponentDidMountCls extends Component {
    constructor() {
        super();
        console.warn("Constructor");
        this.state = {
            name: "Rohit"
        }
    };

    componentDidMount() {
        console.warn("Component Did Mount, Life Cycle Method");
    };

    render() {
        console.warn("Render Call")

        return (
            <div>
                <h3>Component Did Mount, Life Cycle Method // Name: {this.state.name}</h3>
                <p>Open Console Warn to show this result  <br /> 
                    frist Call :- Constructor; <b>One Time</b><br /> 
                    second call :- Render ; <br /> 
                    third call :- componentDidMount
                </p>

                <Button onClick={()=>{ this.setState({name:"nittawadekar"})}}>change Name</Button>
            </div>
        )
    }

}

export default ComponentDidMountCls;