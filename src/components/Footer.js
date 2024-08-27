import { useState ,useEffect} from "react"

export function Footer() {

const [val,setVal]=useState(null)

function MyData(){
    let data = [1,2,3,4,5]
    const result = data.reduce((tot,num)=>{
        return tot+num
    })

    setVal(result)

}
useEffect(()=>{

    MyData()
},[])


console.log(val);
    return (
        <>
        <h1> this is footer count: {val}</h1>
        </>
    )
    
    }