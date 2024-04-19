import { CartsService } from './../../services/carts.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {

cartProducts:any[]=[];
total:number=0;
successMassage:boolean=false;

ClearProduct(){
  this.cartProducts= [];
  localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  this.GetTotalPrice()

}

GetCartProducts()
{
if("cart"in localStorage){
  this.cartProducts= JSON.parse(localStorage.getItem('cart')!)
  console.log(this.cartProducts);

this.GetTotalPrice()

}
}



MinsAmount(index:any){

  console.log(index);
if(index.quantity> 0){
  index.quantity --;
  localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  this.GetTotalPrice()
}
else{alert('Erorr')}



}

DetectChange(){
  localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  this.GetTotalPrice()
}
AddAmount(index:any){

  console.log(index);

  index.quantity ++;
  localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  this.GetTotalPrice()
}

DeleteItem(index:any){
console.log(this.cartProducts.indexOf(index));

let x = this.cartProducts.indexOf(index)

this.cartProducts.splice(x,1)

localStorage.setItem('cart', JSON.stringify(this.cartProducts))
this.GetTotalPrice()



}

GetTotalPrice(){
  this.total=0;
   for(let x in this.cartProducts)
   {
     this.total+=this.cartProducts[x].item.price*this.cartProducts[x].quantity;


   }
 }

 AddCartSend(){
  let product= this.cartProducts.map(product=>{
   return {productId: product.item.id,
      quantity:product.quantity
    }
  })

  let model=
  {
    userId:2,
    date: new Date(),
    products:product
  }

  this._service.CreateNewCart(model).subscribe(res=>
{console.log(res)
  this.successMassage=true;
})




}




constructor(private _service:CartsService) {}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.GetCartProducts();

}

}
