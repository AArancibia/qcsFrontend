import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
