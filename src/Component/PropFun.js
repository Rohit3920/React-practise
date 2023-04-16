import "./style.css"
import {Fragment} from 'react' 
function PropFun(props){
    console.warn(props)
    return (
        <Fragment className="main">
            <p>props with Function Component</p>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.other.address}</h1>
        </Fragment>
    )
}
export default PropFun;