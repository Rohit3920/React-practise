import react, {Component} from 'react';
import { Button } from "react-bootstrap";

class StateCls extends Component
{
    constructor(){
        super();

        this.state ={
            name: "Rohit"
        };

    }
    chgState(){
        this.setState(this.name)
    }
    render(){
        return(
            <div>
                <h1>State with Class Component : {this.state.name}</h1>
                <Button onClick={()=> this.chgState()}>State change</Button>
            </div>
        );
    }
}
export default StateCls;