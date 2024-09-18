import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [click,setClick] = useState(0)

    const handleClick = ()=>{
        setClick(click +1)
    }

    useEffect(()=>{
        console.log(click) 
    },[click])


  return (
    <div>
        <h1>UseEffect</h1>

        <p>click : {click}</p>
        <button onClick={handleClick}>CLICK HERE</button>

    </div>
  )
}

export default UseEffect