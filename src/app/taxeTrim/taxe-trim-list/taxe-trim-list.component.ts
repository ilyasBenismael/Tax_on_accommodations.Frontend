import {Component, OnInit} from '@angular/core';
import {TaxeTrimService} from "../../controller/service/taxe-trim.service";
import {TaxeTrim} from "../../controller/model/taxe-trim.model";

@Component({
  selector: 'app-taxe-trim-list',
  templateUrl: './taxe-trim-list.component.html',
  styleUrls: ['./taxe-trim-list.component.css']
})



export class TaxeTrimListComponent implements OnInit{

 filter : any ="";
 key : any="";


  constructor(private taxeTrimService: TaxeTrimService ) {}

ngOnInit() {
    this.findAll(); }

  findAll(): void{
     this.taxeTrimService.findAll().subscribe(data => {
       this.taxeTrims = data; }) }

  public deleteTaxe(ref: any): void{
    this.taxeTrimService.delete(ref).subscribe(data=>{
      if(data==1){
        alert('deleted')
      this.doFilter();
      }else{
        alert('error')}});
  }


  doFilter(): void{
    if(this.filter=="cin"){
     this.taxeTrimService.findbyCin(this.key).subscribe(data =>{ this.taxeTrims = data;});
    }else if(this.filter=="ref"){
      this.taxeTrimService.findbyLocal(this.key).subscribe(data =>{ this.taxeTrims = data;});
    }else{
      this.findAll();  } }


  get taxeTrims(): TaxeTrim[] {
  return this.taxeTrimService.taxeTrims;
  }

  set taxeTrims(value: TaxeTrim[]) {
   this.taxeTrimService.taxeTrims=value;
  }

  get taxeTrim(): TaxeTrim {
return this.taxeTrimService.taxeTrim;
  }


  set taxeTrim(value: TaxeTrim) {
this.taxeTrimService.taxeTrim = value;
  }


}
