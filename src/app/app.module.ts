import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/Service.Shared/shared.module";
import { HttpClientModule} from '@angular/common/http'
import { ProductsModule } from './products/products.module';
import {  FormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';

@NgModule({
    declarations: [
        AppComponent,


    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ProductsModule,
        FormsModule,
        CartsModule





    ]
})
export class AppModule { }
