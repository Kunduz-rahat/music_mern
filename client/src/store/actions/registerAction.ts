import { Dispatch } from 'react';
import { RegisterAction, RegisterActionTypes } from '../../types/register';
import axios from 'axios';

export const register = () => {
  return async (dispatch: Dispatch<RegisterAction>) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register');
      dispatch({
        type: RegisterActionTypes.REGISTER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: RegisterActionTypes.REGISTER_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};