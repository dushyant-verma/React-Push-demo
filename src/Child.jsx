// import React from 'react'

// const Child = ({num}) => {
//   return (
//     <div>

//         <h2 className="text-xl">Child</h2>
//         <p className="bg-red-500">{num}</p>
//     </div>
//   )
// }


// export default Child



import React, { useContext } from 'react'
import { counterContext } from './context/context'

const Child = () => {

   const count =  useContext(counterContext)

  return (
    <div>Child
        <p className="bg-red-500">{count}</p>  
    </div>
  )
}

export default Child