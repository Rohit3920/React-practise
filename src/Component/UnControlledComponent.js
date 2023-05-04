import { useRef } from "react";
import { Button } from "react-bootstrap";


function UnControlledComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    let input3 = document.getElementById('input3');

function handleForm(e){
        e.preventDefault();
    }

    // var i1 = inputRef1.current.value;
    // var i2 =  inputRef2.current.value ;
    // var i3 = input3;

    console.log("input1  : ", inputRef1, "input2 : ", inputRef2, "input3 : ", input3.value)

    return (
        <div>
            <h1>UnControlled Component in React</h1>
            {/* <h3>{i1} : {i2} : {i3}</h3> */}

            <form onSubmit={handleForm}>
                <input type="text" ref={inputRef1} />

                <input type="text" ref={inputRef2} />

                <input type="text" id="input3" value="rohit"/>

                <Button type="submit" >Submit</Button>

            </form>

        </div>
    )

}

export default UnControlledComponent;