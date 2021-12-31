

export type Helper ={
    flag?:boolean
}

type adminType = 'SUPER-ADMIN' | 'ADMIN' | 'OWNER'
type userType = 'EMP' | 'CUST' | 'CLIENT'

export type CommonProps = Helper & {
    name?:string,
  //  userType?:`${adminType}-${userType}`
  userType?:Exclude<`${adminType}-${userType}`,'ADMIN-CUST'>
}