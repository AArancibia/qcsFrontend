import {UserState} from '@app/features/usuario/state/index';
import {Action, UserActionTypes} from '@app/features/usuario/state/user.action';

const initialState: UserState = {
  loaded: false,
  loading: false,
  users: [],
};

export const userReducer: ( state: UserState, action: Action ) => UserState = (
  state = initialState,
  action: Action,
) => {
  switch ( action.type ) {
    case UserActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case UserActionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};
