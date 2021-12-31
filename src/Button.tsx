import React from 'react'

type btnProps = {
    apiHits:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
function Button(props:btnProps) {
    return (
        <button onClick={(event)=>props.apiHits(event)} className="abc">Clicksss </button>
    )
}

export default Button
