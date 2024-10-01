// import React from 'react'
// import Child from './Child'

// const Parent = ({num}) => {
//   return (
//     <div>

//         <h1 className="text-2xl">Parent</h1> 

//         <Child num={num}/>
//     </div>
//   )
// }

// export default Parent


import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>Parent

        <Child/>
    </div>
  )
}

export default Parent