import React from 'react' 

import Button from './Button'

function Events() {
    const apiHit = (event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(event.target,'hello')
    }
    const handleChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target)

    }
    return (
        <div>
            Events
            <button onClick={(event)=>apiHit(event)} className="abc">Click Parent </button>
            =============<br/>
            <Button apiHits={(event)=>apiHit(event)}/> 
            <br/>
            <input type="text" value="" onChange={handleChange}/>
          
        </div>
    )
}

export default Events
