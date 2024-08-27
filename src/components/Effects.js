import React, { useEffect, useState } from 'react'

const Effects = () => {

    const [count, setCount] = useState(0)
    const [val, setVal] = useState(0)

    function handleClick() {
        setCount(count + 1)  // value must be updated by 1 value 
    }





    async function api() {  // 
        const url = await fetch("https://fakestoreapi.com/products")
        console.log(url);
        const data = await url.json()

        console.log(data);
    }

    // useEffect(  ()=>{}  , [])

    useEffect(() => {
        console.log("use Effect called");
        api()
    }, [])

    // useEffect(()=>{
    // for(let i=0;i<1000000000;i++){
    // }
    //     console.log("use Effect called");

    // },[val])

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleClick}> update</button>
            <h1>Val:{val}</h1>
            <button onClick={() => { setVal(val + 1) }}> update</button>

        </div>
    )
}

export default Effects