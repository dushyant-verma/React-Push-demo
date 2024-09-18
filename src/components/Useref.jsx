import React from 'react'
import { useRef } from 'react'
const Useref = () => {

    let inputRef = useRef(null)
    const handleInput = ()=>{
        // console.log(inputRef);
        console.log(inputRef.current.value);

        if (inputRef.current.value.length < 4) {
            inputRef.current.style.color = 'red'
        }else{
            inputRef.current.style.color = 'green'
        }
    }

    return (
        <div>
            <h1 className='text-2xl'>use ref hook</h1>
            <input className='bg-[#000] text-white' type="text" ref={inputRef} onChange={handleInput} />
        </div>
    )
}

export default Useref

// signup passwaord input color change according to length 