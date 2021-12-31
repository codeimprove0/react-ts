import React from 'react'

type CallProps = {
    variant :'primary' | 'secondary'
} & React.ComponentProps<any>

const CallComp = ({variant,children,...rest}:CallProps) =>{
    console.log(rest)
    return (
        <div> 
            <span className={`class-${variant}`} {...rest}>
                {children}
                </span>
        </div>
    )
}

export default CallComp
