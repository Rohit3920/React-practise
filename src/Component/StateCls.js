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
        this.setState({name : "ROHIT NITTAWADEKAR"})
    }
    render(){
        return(
            <>
                <h1>State with Class Component : {this.state.name}</h1>
                <Button onClick={()=> this.chgState()}>State change</Button>
            </>
        );
    }
}
export default StateCls;