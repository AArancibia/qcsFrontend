import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Users } from '@app/core/model/users.model';
import { users } from '@app/core/model/usuarios.json';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsers(): Observable< Users[] > {
    return of( users );
  }
}
