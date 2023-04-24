import { Component } from "react";

class ConstructorLCM extends Component{
    constructor(){
        super();
        this.state = {
            data: "Rohit Nittawadakar"
        }
    }
    render(){
        return (
            <div>

                <p>Constructor Life Cycle Method </p>
                <h1>Hello Would {this.state.data}</h1>
            </div>
        )
    }
}

export default ConstructorLCM;