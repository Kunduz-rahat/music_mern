import { RegisterAction, RegisterActionTypes, RegisterState } from '../../types/register';

const initialState: RegisterState = {
  user:[],
  error:''

};
export const registerReducer = (
  state = initialState,
  action: RegisterAction
): RegisterState => {
 switch(action.type){
  case RegisterActionTypes.REGISTER_SUCCESS:
    return {error:'', user:action.payload}
  case RegisterActionTypes.REGISTER_ERROR:
    return {...state, error:action.payload}
 }
  }
