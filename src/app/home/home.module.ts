import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import {SharedModule} from '../shared/shared.module';
import { AcceslabComponent } from './pages/acceslab/acceslab.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    AcceslabComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    NgZorroAntdModule,
    FlexLayoutModule,
  ],
  exports: [
    HomeComponent,
    ProductosComponent
  ]
})
export class HomeModule { }
