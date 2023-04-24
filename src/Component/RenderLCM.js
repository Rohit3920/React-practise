import { Component } from "react";
import { Button } from "react-bootstrap";

class RenderLCM extends Component{
    constructor(){
        super();
        this.state = {
            email : "rohit@gamil.com"
        }
    }

    render(){
        return(
            <div>
                <p>Render Life Cycle Method</p>

                <h1> User E-mail Id : {this.state.email}</h1>

                <Button onClick={()=> this.setState({email: "rohitnittawadekar@gamil.com"})}>State Update</Button>
            </div>
        )
    }
}
export default RenderLCM;