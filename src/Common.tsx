import React from 'react'
import {CommonProps} from './PropsType'

function Common(props:CommonProps) {
    return (
        <div>
            Hello {props.name} {props.userType}
        </div>
    )
}

export default Common
