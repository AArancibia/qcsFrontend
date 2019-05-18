import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {userReducer} from '@app/features/usuario/state/user.reducer';
import {UserEffects} from '@app/features/usuario/state/user.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature( 'users', userReducer ),
    EffectsModule.forFeature( [ UserEffects ]),
  ]
})
export class UsuarioModule { }
