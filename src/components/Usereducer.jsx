import { useReducer } from "react";


function reducer(state,action) {
    console.log(state);
    console.log(action);

    // if(action.type === 'inc'){
    //     return  {count:state.count + 1}
    // }
    // if (action.type === 'dec') {
    //     return  {count:state.count - 1}
        
    // }
    // return state 

    switch (action.type) {
        case 'inc':
            
        return  {count:state.count + 1};
        case 'dec':
            
        return  {count:state.count - 1};
    
        default:
            return state;
    }
}
const Usereducer = () => {
    let inatialValue = {
        count : 0
    }

    const [state,dispatch] = useReducer(reducer,{count : 0}) 

  return (
    <div>
        <h1 className="text-2xl">use reducer</h1>

        <p className="bg-gray-600 text-2xl">count click is : {state.count} </p>

        <button  onClick={()=>dispatch({type : 'inc'})} className="bg-green-600 ml-4 p-2">inc</button>
        <button  className="bg-red-600 ml-4 p-2">dec</button>     </div>
  )
}

export default Usereducer
