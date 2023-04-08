import { Component } from '@angular/core';
import {TaxeTrimService} from "../../controller/service/taxe-trim.service";
import {InfoRecuTrim} from "../../controller/model/info-recu-trim.model";
import {HttpErrorResponse} from "@angular/common/http";
import {TaxeTrim} from "../../controller/model/taxe-trim.model";

@Component({
  selector: 'app-taxe-trim-create',
  templateUrl: './taxe-trim-create.component.html',
  styleUrls: ['./taxe-trim-create.component.css']
})


export class TaxeTrimCreateComponent {
  infoRecuTrim : InfoRecuTrim= new InfoRecuTrim();
  result : String = "";




  constructor(private taxeTrimService: TaxeTrimService) {}




public payer(): void {
  this.taxeTrimService.payer(this.infoRecuTrim).subscribe((response: number) =>{
  if(response==1){
    this.result="Taxe Trimestriel payée avec succé";
    this.infoRecuTrim=new InfoRecuTrim();
    this.taxeTrimService.findAll().subscribe(data=>{this.taxeTrims=data;});
  }
  if (response==-1){
    this.result="redevable n'existe pas";

  }
  if (response==-2){
    this.result="local n'existe pas";

  }
  if (response==-3){
    this.result="trimestre n'existe pas";

  }
  if (response==-4){
    this.result="categorie n'existe pas";

  }
  if (response==-5){
    this.result="redevable ne pocède pas le local";

  }
  if (response==-6){
    this.result="le taxe est deja payé";

  }
  if (response==-7){
    this.result="le taxe precedent n'est pas payé";
  }

  if (response==-9){
    this.result="taux n'existe pas";

  }
  if (response==-10){
        this.result="reference dupliquée";

      }
      if (response==-80){
        this.result="echec d'envoi d'email";

      }
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
})
  }




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
