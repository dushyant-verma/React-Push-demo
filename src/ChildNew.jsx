import React, { useContext } from 'react'
import { ParentNew } from './ParentNew'
import { useContext } from 'react'
import { counterContext } from './context/context'


export const ChildNew = () => {

    const count = useContext(counterContext)


    return (
        <div>ChildNew



        </div>
    )
}
