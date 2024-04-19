import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  CreateNewCart(model:any){
    return this._http.post('https://fakestoreapi.com/carts', model);

  }

  constructor(public _http:HttpClient)
  {


  }
}
