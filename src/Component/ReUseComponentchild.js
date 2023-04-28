function ReUseComponentchild(props){
const {name, country, Mobile} = props.data;
    return(

        <div>
            <h4>{name}</h4>
            <span><b>Country :</b> {country} </span>
            <span><b>Contact Us :</b> {Mobile}</span>

        </div>


    )
}

export default ReUseComponentchild;