import { Users } from '@app/core/model/users.model';

export interface UserState {
  users: Users[];
  loading: boolean;
  loaded: boolean;
}
