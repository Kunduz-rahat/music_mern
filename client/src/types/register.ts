export interface IRegister{
	username:string,
	password:string,
	email:string,

}
export interface RegisterState{
	user:IRegister[],
	error:string
}
export enum RegisterActionTypes{
	REGISTER_SUCCESS= 'REGISTER_SUCCESS',
	REGISTER_ERROR = 'REGISTER_ERROR',

}

interface RegisterSuccessAction{
	type:RegisterActionTypes.REGISTER_SUCCESS,
	payload:IRegister[]
}

interface RegisterErrorAction{
	type:RegisterActionTypes.REGISTER_ERROR,
	payload:string
}



export type RegisterAction = RegisterErrorAction | RegisterSuccessAction