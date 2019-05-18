import {Users} from '@app/core/model/users.model';
import * as Store from '@app/store/qcs-store.module';

export interface UserState {
  users: Users[];
  loading: boolean;
  loaded: boolean;
}

export interface AppState extends Store.AppState {
  users: UserState;
}
