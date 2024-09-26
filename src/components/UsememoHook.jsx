import React, { useEffect, useMemo, useState } from 'react'


const UsememoHook = () => {
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(true);
    // const [result, setResult] = useState(null)

    const increase = () => {
        return setNum(num + 1)

    }

    const numCount = (num) => {
        for (let i = 0; i <= 1000000000; i++) { }
        return num
    }

    // const result = numCount(num) 

    const result = useMemo(() => {
       return numCount(num)
    }, [num])

    // useEffect(() => {
    //     setResult(numCount(num))
    // }, [num])
    

    return (
        <div>
            <h1 className="text-2xl">use memo hooks</h1>
            <button onClick={increase} className="bg-blue-600 p-2">increase</button>

            <p className="bg-red-500 p-2 text-xl"> number is : {result} </p>
            <button onClick={() => setShow(!show)}>{show ? "Click here " : "You Clicked"}</button>

        </div>
    )
}

export default UsememoHook