function ReUseComponentchild(props){
const {name, country, Mobile} = props.data;
const id = props.id + 1;
    return(

        <div>
            <h4> ( {id} ) {name} :) </h4>
            <span><b>Country :</b> {country} </span>
            <span><b>Contact Us :</b> {Mobile}</span>
            <p><b>*********************************************</b></p>


        </div>


    )
}

export default ReUseComponentchild;