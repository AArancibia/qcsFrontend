import {Action, ErrorActionTypes} from '@app/store/actions/error.action';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
};

export const errorReducer: ( error: ErrorState, action: Action ) => ErrorState = (
  state = initialState,
  actions: Action,
) => {
  switch ( actions.type ) {
    case ErrorActionTypes.ADD_ERROR:
      return {
        ...state,
        error: actions.payload,
      };
    case ErrorActionTypes.REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return  state;
  }
};
