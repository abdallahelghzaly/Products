import { ProductComponent } from './Componants/product/product.component';
import { SharedModule } from './../shared/Service.Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './Componants/all-products/all-products.component';
import { ProductsDetailsComponent } from './Componants/products-details/products-details.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
  ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink



  ]
})
export class ProductsModule { }
