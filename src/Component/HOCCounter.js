import { useState } from "react";
import { Button } from "react-bootstrap";

function HOCCounter() {

    const [count, setCount] = useState(0)

    return (
        <>
            <h3>Using HOC Counter : {count}</h3>
            <Button onClick={() => setCount(count + 1)}>Inc-Count</Button>
        </>

    )

}

export default HOCCounter;