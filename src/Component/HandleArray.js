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
            <h1>List with Bootstrap & Unique Key TABLE</h1>

            <Table border='1' variant="dark">
                <tbody >
                    <tr>
                        <td><b>Sr. <br /> No.</b></td>
                        <td><b>Name</b></td>
                        <td><b>Country</b></td>
                        <td><b>Mobile No.</b></td>
                    </tr>



                    {
                        student.map((data, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
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