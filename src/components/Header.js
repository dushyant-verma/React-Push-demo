import { useState } from "react"

function Header() {
const[username,setUsername]= useState()
const[password,setPassword]= useState()

return (
    <div>
    <input type="text" onChange={(e)=>{
        console.log(e.target.value);
    }}/>
    <input type="password" onChange={(e)=>{

        console.log(e.target.value); 
        
    }}/>
    {/* <button onClick={handleSubmit}>submit</button> */}
    </div>
)

}

export default Header








