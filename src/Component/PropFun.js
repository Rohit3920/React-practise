import "./style.css"
function PropFun(props){
    console.warn(props)
    return (
        <div className="main">
            <p>props with Function Component</p>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            {/* <h1>{props.other.address}</h1> */}
        </div>
    )
}
export default PropFun;