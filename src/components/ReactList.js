import React from 'react'

const ReactList = () => {

    let data = [
        {
            'id':'01',
            "name":"dushyant"

        },
        {
            'id':'02',
            "name":"ajay"

        },
        {
            'id':'03',
            "name":"ankit"

        }
    ]
  return (
    <div>
        <h1  className='    >Map List </h3>
'>react list</h1>

        {
            data.map((item)=>(
                <div key={item.id} >
                <h4 style={{color:"#68d3f1",backgroundColor:"black"}} >{item.name}</h4>
                <h2>{item.name}</h2>
                </div>
            ))
        }
        

    </div>
  )
}

export default ReactList