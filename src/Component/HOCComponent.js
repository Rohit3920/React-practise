import HOCCounter from "./HOCCounter";

function HOCComponent(){

    return(
        <>
        <h1>High Order Component in react JS</h1>
        <HOCCounter />

        <RedHOC cmp={HOCCounter}/>

        <OrangeHOC cmp={HOCCounter}/>

        <GrayHOC cmp={HOCCounter}/>


        </>
    )

}

function RedHOC(props){
    return(
        <p style={{backgroundColor: 'red', width: 100}}>
            <props.cmp />
        </p>
    )
}

function OrangeHOC(props){
    return(
        <p style={{backgroundColor: 'orange', width: 100}}>
            <props.cmp />
        </p>
    )
}

function GrayHOC(props){
    return(
        <p style={{backgroundColor: 'gray', width: 100}}>
            <props.cmp />
        </p>
    )
}

export default HOCComponent;