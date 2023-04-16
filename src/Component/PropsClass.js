import { Component, Fragment } from "react"

class PropsClass extends Component{

    render(){
        console.warn(this.props)
        return(
            <Fragment className="main">
                <p>Props with Class Component</p>
                <h1>Student : {this.props.name}</h1>
            </Fragment>
        )
    }
}

export default PropsClass