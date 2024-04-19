import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

@Input() title:string="";
@Input() DataArray:any[]=[];
@Output() SelectValue=new EventEmitter()

detechChange(event:any){
  this.SelectValue.emit(event)
  console.log(event.target.value);


 }










  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
