import React, { useState } from 'react'

const Hooks = () => {
    const [state, setState] = useState(0)
    const [value, setValue] = useState('')

    const increase = () => {
        setState(() => state + 2)
    }
    // create a counter using useState -- increase , decrease(native value nhi mile ) , reset
    // When we login then all input data must be shown on console...
    const handleInput = (e) => {
        setValue(e.target.value)
    }
    // console.log(value)
    

    return (

        <div>

            <h1 className='text-3xl'> Hooks</h1>
            useState hooks
            <h5>{state}</h5>
            <button onClick={increase}>increase</button>
          
          
            <h3>{value}</h3>
            <input onChange={handleInput} placeholder='please enter here' />

        </div>
        
    )
}

export default Hooks