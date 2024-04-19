import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/Componants/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/Componants/products-details/products-details.component';
import { CartsComponent } from './carts/Componants/carts/carts.component';

const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"details/:x",component:ProductsDetailsComponent},
  {path:"cart",component:CartsComponent},
  {path:"**", redirectTo:"products",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
