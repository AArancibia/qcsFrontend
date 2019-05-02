import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProductosComponent} from './pages/productos/productos.component';
import {AcceslabComponent} from './pages/acceslab/acceslab.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'acceslab',
        pathMatch: 'full'
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'acceslab',
        component: AcceslabComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
