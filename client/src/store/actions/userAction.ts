import { Dispatch } from 'react';
import { UserAction, UserActionTypes} from '../../types/user';
import axios from 'axios';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const responce = await axios.get('http://localhost:5000/tracks');
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