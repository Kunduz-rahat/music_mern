export interface UserState{
tracks:Track[]
	username:string,
	password:string,
	email:string
}

export enum UserActionTypes{
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
}

interface FetchUserAction{
	type:UserActionTypes.FETCH_USER
}

interface FetchUserActionError{
	type:UserActionTypes.FETCH_USER_ERROR,
	payload:string
}

interface FetchUserActionSuccess{
	type:UserActionTypes.FETCH_USER_SUCCESS,
	payload:any[]
}

export type UserAction = FetchUserAction | FetchUserActionError | FetchUserActionSuccess