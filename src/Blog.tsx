import React from 'react' 

type BlogProps = {
    name: 'Sports' | 'Movie' |'Cricket', 
    id:number,
    address:{
        city:string,
        pincode:number
    }, 
    children: React.ReactNode
    styles: React.CSSProperties
  //  names:Array<number>
  names:Array<any>,
    lists:{
        name:string,
        email:string
    }[]
}
function Blog(props:BlogProps) { 
    return (
        <div>
            <h1 style={props.styles}>Blog Component</h1>
            <h3>{props.name} {props.id} {props.children}</h3>
            <h4>{props.lists[0].name} {props.address.city} {props.names[1]}</h4> 
        </div>
    )
}

export default Blog
