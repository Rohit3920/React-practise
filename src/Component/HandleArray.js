import { Table } from "react-bootstrap";


function HandleArray() {

    const student = [
        { name: 'rohit', country: "INDIA", Mobile: 12345678 },
        { name: 'saurabh', country: "INDIA", Mobile: 5678676 },
        { name: 'akshay', country: "INDIA", Mobile: 768766756 },
        { name: 'vedant', country: "INDIA", Mobile: 12387678 },
        { name: 'prajwal', country: "INDIA", Mobile: 45646547 },
    ]



    return (
        <div>
            {/* {
                student.map((data) =>
                    <h3>name is {data.name}</h3>
                )
            } */}

            <Table border='1' variant="dark">
                <tbody >
                    <tr>
                        <td>Name</td>
                        <td>Country</td>
                        <td>Mobile No.</td>
                    </tr>



                    {
                        student.map((data) =>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.country}</td>
                                <td>{data.Mobile}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    )

}

export default HandleArray;