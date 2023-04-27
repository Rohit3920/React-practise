import { Component } from "react";
import { Button } from "react-bootstrap";


class ShouldComponentUpdateCls extends Component {

    constructor() {
        super();

        console.log("Should Component Update, Constructor")

        this.state = {
            count: 0,
            value: true
        };
    }

    shouldComponentUpdate() {
        console.log(`Should Component Update, CALL : ${this.state.count}`)


        return this.state.value;
    }

    render() {
        console.log(" Should Component Update, Render")
        return (
            <div>
                <h1>Should Component Update : {this.state.count}</h1>
                <button onClick={() => { this.setState({ value: !this.state.value }) }}>Change return value</button>
                <p>Should Component Update are Return true then Call Render <br /> <b>and</b>
                    <br />Should Component Update are Return false then Can't Call Render</p>

                <Button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Updata Counter</Button>
            </div >
        )
    }

}

export default ShouldComponentUpdateCls;