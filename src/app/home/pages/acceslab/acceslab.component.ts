import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@app/features/usuario/state/user.type';
import {Observable} from 'rxjs';
import {Users} from '@app/core/model/users.model';
import {LoadUsers} from '@app/features/usuario/state/user.action';

@Component({
  selector: 'app-acceslab',
  templateUrl: './acceslab.component.html',
  styleUrls: ['./acceslab.component.scss']
})
export class AcceslabComponent implements OnInit {
  selectedPerfil: string = 'lucy';
  selectedEstado: boolean= true;
  panels = [
    {
      title: 'Usuarios',
      backIcon: false,
      subtitle: 'Lista de Usuarios',
      active: true,
      content: false,
      detail: true,
    },
    {
      title: 'Maquinas',
      backIcon: false,
      subtitle: 'Lista de Maquinas',
      active: false,
      content: false,
      detail: true,
    },
    {
      title: 'Componentes',
      backIcon: false,
      subtitle: 'Lista de Componentes',
      active: false,
      content: false,
      detail: true,
    },
    {
      title: 'Muestras',
      backIcon: false,
      subtitle: 'Lista de Muestras',
      active: false,
      content: false,
      detail: true,
    }
  ];
  listOfData: any[] = [];
  loading = false;
  sizeChanger = true;
  pagination = true;
  size = 'small';
  expandable = true;
  allChecked = false;
  indeterminate = false;
  displayData: any[] = [];
  simple = false;
  position = 'top';
  indice = 0;
  dateFormat: string = 'yyyy/MM/dd';
  users: Observable< Users[] >;
  constructor(
    private store: Store< AppState >
  ) { }

  ngOnInit() {
    for (let i = 1; i <= 40; i++) {
      this.listOfData.push({
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false
      });
    }
    this.store.dispatch( new LoadUsers() );
    this.users = this.store.select( state => state.users.users );
  }

  noResultChange(status: boolean): void {
    this.listOfData = [];
    if (!status) {
      this.ngOnInit();
    }
  }

  siguiente( indice: number ) {
    this.panels.map(
      ( panel, index, array ) => {
        const panelConf = () => {
          panel.backIcon = true;
          panel.content = false;
          panel.detail = false;
        };
        if ( indice === 0 ) {
          panelConf();
        } else if  ( indice === 1 ) {
          panelConf();
        } else if  ( indice === 2 ) {
          panelConf();
        }
        array[ indice + 1 ].active = true;
        array[ indice + 1 ].backIcon = false;
        array[ indice + 1 ].content = true;
        array[ indice + 1 ].detail = false;
      }
    );
    this.indice++;
    this.listOfData.map(
      ( registros: any ) => registros.expand = false,
    )
  }

  onBack( indice: number ) {
    this.indice = indice;
    this.panels.map(
      ( panel, index, array ) => {
        if ( this.indice < index ) {
          panel.active = false;
        }
        if ( this.indice === index ) {
          panel.content = true;
          panel.backIcon = true;
        }
        panel.detail = false;
      }
    );
  }

  abrirFormulario( indice: number ) {
    this.panels.map(
      ( panel, index ) => index === indice ? panel.content = true :  panel.content = false
    );
  }

  activo( event ) {
    console.log( event );
  }

  currentPageDataChange(
    $event: Array<{
      name: string;
      age: number;
      address: string;
      checked: boolean;
      expand: boolean;
      description: string;
    }>
  ): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

}
