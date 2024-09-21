// import { useReducer } from "react";


// function reducer(state,action) {
//     console.log(state);
//     console.log(action);

//     // if(action.type === 'inc'){
//     //     return  {count:state.count + 1}
//     // }
//     // if (action.type === 'dec') {
//     //     return  {count:state.count - 1}
        
//     // }
//     // return state 

//     switch (action.type) {
//         case 'inc':
            
//         return  {count:state.count + 1};
//         case 'dec':
            
//         return  {count:state.count - 1};
    
//         default:
//             return state;
//     }
// }
// const Usereducer = () => {
//     let inatialValue = {
//         count : 0
//     }

//     // const [state,dispatch] = useReducer(reducer,{count : 0}) 

//     const [state,dispatch] = useReducer(reducer,{count:0})

//   return (
//     <div>
//         <h1 className="text-2xl">use reducer</h1>

//         <p className="bg-gray-600 text-2xl">count click is : {state.count} </p>

//         <button  onClick={()=>dispatch({type : 'inc'})} className="bg-green-600 ml-4 p-2">inc</button>
//         <button  className="bg-red-600 ml-4 p-2">dec</button>     </div>
//   )
// }

// export default Usereducer


import React, { useReducer } from 'react'

function reducer(state,action) {
    console.log(state);
    console.log(action);

    if (action.type ==='increase') {
        return {count:state.count +1,click:state.click }
    }
    else if(action.type === 'decrease'){
        return {count:state.count -1} 

    }else if(action.type ==='btnClicked'){
        return {count:state.count, click:state.click *2} 
    }
    else {
        return state 
    }


}

const Usereducer = () => {

   const [state,dispatch] = useReducer(reducer,{count:0,click : 1})

  return (
    <div>
        <h1 className="text-2xl">use reduce hook</h1>
        <p className="bg-gray-600 text-2xl">click count is : {state.count} and clicked time is {state.click}</p> 
        <button onClick={()=>dispatch({type:"increase"})} className="bg-green-600 ml-2 p-2">inc</button>
        <button onClick={()=>dispatch({type:"deckellorease"})} className="bg-red-600 ml-2 p-2">dec </button>
        <button onClick={()=>dispatch({type:'btnClicked'})} className="bg-orange-600 ml-2 p-2">click here</button>
    </div>
  )
}

export default Usereducer