
import { Component, createRef } from "react";
import { Button } from "react-bootstrap";

class RefClass extends Component {
    constructor() {
        super();
        console.log("Hello Constructor")
        this.inputRef = createRef();
    }

    getData(){
        console.warn(this.inputRef.current.value);
        this.inputRef.current.style.color = "red"
    }

    render(){
        return(
            <div>
                <h1>Ref in Class</h1>
                <p>Ref means Create a element and Handle for function to perform operation </p>

                <input type="text" ref={this.inputRef} />

                <Button onClick={()=> this.getData()}>Check Ref</Button>
            </div>
        )
    }
}
export default RefClass;