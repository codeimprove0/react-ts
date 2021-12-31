import React,{useState} from 'react'

// interface IUserForm {
//     name:string;
//     email:string;
//     age:number
// }
 
const defaultInput = {
    name:'',
    email:'',
    age:10
}
type IUserForm = {
    name:string;
    email:string;
    age:number
}
function StateComp() { 
    const [isDisable,setDisable] = useState(false)
    const [inputField,setField] = useState<IUserForm>(defaultInput)
    return (
        <div>
            State Component  {inputField.age}
        </div>
    )
}

export default StateComp
