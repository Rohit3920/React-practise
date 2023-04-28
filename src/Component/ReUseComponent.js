import ReUseComponentchild from "./ReUseComponentchild";

function ReUseComponent(){

    const userInfo = [
        { name: 'rohit', country: "INDIA", Mobile: 12345678 },
        { name: 'saurabh', country: "INDIA", Mobile: 5678676 },
        { name: 'akshay', country: "INDIA", Mobile: 768766756 },
        { name: 'vedant', country: "INDIA", Mobile: 12387678 },
        { name: 'prajwal', country: "INDIA", Mobile: 45646547 },
    ]

    return(
        <div>

        {
            userInfo.map((info, i) => 
            <ReUseComponentchild data={info} />
            )
        }
        </div>
    )



}

export default ReUseComponent;