import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../Model/Product';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

loading:boolean= false;


constructor(private Http:ProductsService ){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

this.GetAllProduct();
this.GetAllcategories();
}


ProductArray:product[]=[];
categoriesArray:string[]=[];
cartproduct:any[]=[];

GetAllProduct(){
  this.loading=true
this.Http.GetAllProduct().subscribe((res:any)=>
{
  this.loading=false
  this.ProductArray=res
  console.log(res);

})
}

GetAllcategories(){
  this.loading=true
  this.Http.GetAllcategories().subscribe((res:any)=>
  {
    this.loading=false

    console.log(res);
    this.categoriesArray=res


  })
}


GetonceCatogery(event:any){
this.Http.Getoncecategory(event.target.value).subscribe((res:any)=>

{
  if(event.target.value=='all'){
    this.GetAllProduct()
  }else{

    console.log(res);
    console.log(event.target.value);
    this.ProductArray=res
  }

}

)
}

AddToCart(event:any)
{
if('cart' in localStorage)
{
  this.cartproduct=JSON.parse(localStorage.getItem('cart')!)
  let exist= this.cartproduct.find((item)=>item.item.id==event.item.id)
  if(!exist){

    this.cartproduct.push(event)
    localStorage.setItem('cart',JSON.stringify(this.cartproduct))
  }
  else{
    alert('You Already Add it')
  }
}else{
  this.cartproduct.push(event)
  localStorage.setItem('cart',JSON.stringify(this.cartproduct))

}
}









}
