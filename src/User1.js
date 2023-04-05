import react, { useEffect, useState } from 'react'

export default function User1(props) {
    useEffect(() => {
        alert(`count is ${props.count}`)
    }, [props.count])
    return (
        <div className="User1">
            <h1>count props: {props.count}</h1>
            <h1>Data props: {props.data}</h1>
        </div>
    )
}
