import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  idSinglePage:any= this.RouterActive.snapshot.params['x'];
  data:any={}


constructor(private Http:ProductsService , private RouterActive:ActivatedRoute){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.GetSinglePage()
}


GetSinglePage(){
  this.Http.GetSignlePage(this.idSinglePage).subscribe({next:(res)=>
    {
      console.log(res)
    console.log(this.idSinglePage);
    this.data=res
  }
  },)
}

}
