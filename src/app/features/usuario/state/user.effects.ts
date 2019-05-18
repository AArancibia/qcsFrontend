import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {AppState} from '@app/features/usuario/state/user.type';
import {Observable, of} from 'rxjs';
import {LoadUsers, LoadUsersSuccess, UserActionTypes} from '@app/features/usuario/state/user.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { UsuarioService } from '@app/core/services/usuario.service';
import {AddError, RemoveError} from '@app/store/actions/error.action';
import { Users } from '@app/core/model/users.model';

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private store: Store< AppState >,
    private usuarioService: UsuarioService,
  ) {}

  @Effect()
  loadUsuarios$: Observable< Action > = this.action$.pipe(
    ofType<LoadUsers>( UserActionTypes.LOAD_USERS ),
    tap( () => this.store.dispatch( new RemoveError() )),
    mergeMap(
      action => this.usuarioService.getUsers().pipe(
        map( ( users: Users[] ) => new LoadUsersSuccess( users ) ),
        catchError( err => of( new AddError( err.error )))
      ),
    )
  );
}
