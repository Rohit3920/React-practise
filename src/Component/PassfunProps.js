import { Button } from "react-bootstrap";

export default function PassfunProps(props){
    return (
        <>
        <h1>Pass function with Props</h1>
        <p>function create on parent component and then passs this function on child component as props</p>
            <Button onClick={props.data}>click me</Button>
        </>
    )
}