import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() data:any={}
@Output() item= new EventEmitter()
AddButtonngif:boolean=false
amount:number=0;

Add()
{
  if(this.amount>=1){
    this.item.emit({item:this.data,quantity: this.amount})
  }else{
    alert('the Number less Than 1')
  }
}

constructor(){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}

}
