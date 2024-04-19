import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './../Componants/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Componants/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from '../Componants/select/select.component';



@NgModule({
  declarations: [

    HeaderComponent,
    SpinnerComponent,
    SelectComponent,






  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule





  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule



  ]
})
export class SharedModule { }
