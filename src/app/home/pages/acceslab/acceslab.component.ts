import { Component, OnInit } from '@angular/core';

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
      title: 'Productos',
      backIcon: false,
      subtitle: 'Lista de Productos',
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
  header = true;
  fixHeader = false;
  size = 'small';
  expandable = true;
  allChecked = false;
  indeterminate = false;
  displayData: any[] = [];
  simple = false;
  noResult = false;
  position = 'top';
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.listOfData.push({
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false
      });
    }
  }

  noResultChange(status: boolean): void {
    this.listOfData = [];
    if (!status) {
      this.ngOnInit();
    }
  }

  siguiente( indice: number ) {
    console.log( indice );
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
        array[ indice + 1 ].detail = true;
      }
    );
  }

  abrirFormulario( indice: number ) {
    console.log( indice );
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
