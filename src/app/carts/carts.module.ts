import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './Componants/carts/carts.component';
import { SharedModule } from '../shared/Service.Shared/shared.module';




@NgModule({
  declarations: [
    CartsComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,





  ]
})
export class CartsModule { }
