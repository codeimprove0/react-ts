import React, { Component } from 'react'

type MainState = {
    name:string
    email:string
}
type MainProps ={
    category:string
}
class ClassComp extends Component<MainProps,MainState> {
    constructor(props:MainProps) {
        super(props)
    
        this.state = {
             name:'NA',
             email:'test@gmai.com'
        }
    }
    changeEmail(emailID:string){
        this.setState({
            email:emailID
        })
    }
    render() {
        return (
            <div>
                yes  {this.state.name} -- {this.props.category}--- {this.state.email}

                <button onClick={()=>this.changeEmail('demo@jjgjhgjghjgjgmail.com')}>Change Email</button>
            </div>
        )
    }
}

export default ClassComp
