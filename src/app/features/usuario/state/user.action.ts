import { Action } from '@ngrx/store';
import {Users} from '@app/core/model/users.model';
export enum UserActionTypes {
  LOAD_USERS = '[USERS] Load users',
  LOAD_USERS_SUCCESS = '[USERS] Load users success'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;
  constructor( public payload: Users[] ) {}
}

export type Action = LoadUsers | LoadUsersSuccess;
