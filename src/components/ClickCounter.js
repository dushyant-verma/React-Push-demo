// 2. Create an Counter using usestate where when we 
// click the value must be change 

import { useState } from "react"; // import hook

export const ClickCounter = ({name}) => {
    const [count, setCount] = useState(0);  //  set use state at 0 -  hook - used one state



    const increment = () => {
        setCount(count + 1);
    };



    const decrement = () => {

        if (count <= 0) {
            setCount(0);

        } else {
            setCount(count - 1);

        }
    };


    const reset = () => {

        setCount(0);

    }






    return (

        <>
            <div>This is our counter Application</div>
            <h1>{name}</h1> 
            
            <div className="flex justify-center">

                <button onClick={decrement}>-</button>
                <span>Clicks{count}</span>
                <button onClick={increment}>+</button>
                <button style={{backgroundColor:"red"}} onClick={reset}>reset</button>

            </div>

        </>

    )
}