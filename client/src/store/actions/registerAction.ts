import { Dispatch } from 'react';
import { UserAction, UserActionTypes} from '../../types/register';
import axios from 'axios';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const responce = await axios.get('http://localhost:5000/api/auth/');
      dispatch({
        type: UserActionTypes.FETCH_USER,
        payload: responce.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};