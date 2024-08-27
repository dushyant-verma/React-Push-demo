import "./Body.css"
import { useState } from "react"

export function Body() {

    let rating = 5;
    const [val, setVal] = useState(true)

    const handleClick = () => {
        setVal(!val)
    }


    return (
        <>
            <h1>{val}</h1>
            <div>
                <button>increase</button>
            </div>
        </>
    )

}