import { Component } from "react";


class ComponentDidMountCls extends Component {
    constructor() {
        super();
        console.warn("Constructor");
    };

    componentDidMount() {
        console.warn("Component Did Mount, Life Cycle Method");
    };

    render() {
        console.warn("Render Call")

        return (
            <div>
                <h3>Component Did Mount, Life Cycle Method</h3>
                <p>Open Console Warn to show this result  <br /> 
                    frist Call :- Constructor; <br /> 
                    second call :- Render ; <br /> 
                    third call :- componentDidMount
                </p>
            </div>
        )
    }

}

export default ComponentDidMountCls;