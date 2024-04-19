import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }



  GetAllProduct(){

  return  this._http.get('http://fakestoreapi.com/products')

  }

  GetAllcategories(){
    return this._http.get('https://fakestoreapi.com/products/categories')
  }

  Getoncecategory(type:any){
    return this._http.get('https://fakestoreapi.com/products/category/'+type)
  }
  GetSignlePage(number:any){
    return this._http.get('https://fakestoreapi.com/products/'+number)

  }

}
