import React from 'react'
import { useRef } from 'react'

export default function UserefChangeColor() {


    const setRef = useRef(null)  // setting ref value 
    const changecolor = () => {

        console.log(setRef.current.value); // Consoling values

        if (setRef.current.value.length <= 4) {

            setRef.current.style.color = 'yellow'

        } else {
            setRef.current.style.color = 'violet'
        }


    }



    return (
        <div>


            <h2>Changing Color as per length </h2>
            <input className='bg-[#9d97a757] text-white'  type="password" ref={setRef} onChange={changecolor} />

        </div>
    )
}
