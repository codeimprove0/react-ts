import React from 'react'

type NavProps<T> ={
    list:T[]
}
// extends string | number
const  Nav = <T extends {id:number,name:string}>(props:NavProps<T>)=> {
    return (
        <div>
            {props.list[1].name}
        </div>
    )
}

export default Nav
