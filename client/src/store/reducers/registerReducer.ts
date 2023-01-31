import { UserAction, UserActionTypes, UserState } from '../../types/register';

const initialState: UserState = {
   password:'',
   username:'',
   email:'',
   error:null

};
export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
 
  }
