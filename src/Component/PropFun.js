import {Fragment} from 'react' 
import "./style.css"
function PropFun(props){
    console.warn(props)
    return (
        <Fragment>
        <div className="main">
            <p>props with Function Component</p>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.other.address}</h1>
            </div>
        </Fragment>
    )
}
export default PropFun;