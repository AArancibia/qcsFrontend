import { NgModule } from '@angular/core';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {errorReducer, ErrorState} from '@app/store/reducers/error.reducer';

export interface AppState {
  error: ErrorState;
}

export const reducers: ActionReducerMap< AppState > = {
  error: errorReducer,
};

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot( reducers ),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
  ]
})
export class QcsStoreModule { }
