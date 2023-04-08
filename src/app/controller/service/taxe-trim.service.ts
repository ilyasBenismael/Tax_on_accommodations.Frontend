import { Injectable } from '@angular/core';
import {TaxeTrim} from "../model/taxe-trim.model";
import {HttpClient} from "@angular/common/http";
import {InfoRecuTrim} from "../model/info-recu-trim.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TaxeTrimService {

   _taxeTrim = new TaxeTrim();
   _taxeTrims = new Array<TaxeTrim>();

  private _url = 'http://localhost:8036/api/v1/taxeTrim/';
  constructor(private _http: HttpClient) { }


  get taxeTrim(): TaxeTrim {
    if(this._taxeTrim==null){
      this._taxeTrim=new TaxeTrim();
    }
    return this._taxeTrim;
  }

  set taxeTrim(value: TaxeTrim) {
    this._taxeTrim = value;
  }



  get taxeTrims(): TaxeTrim[] {
    if(this._taxeTrims==null){
      this._taxeTrims=new Array<TaxeTrim>();
    }
    return this._taxeTrims;
  }

  set taxeTrims(value: TaxeTrim[]) {
    this._taxeTrims = value;
  }


  public findbyCin(cin: any): Observable<Array<TaxeTrim>>{
    return this._http.get<Array<TaxeTrim>>(this._url+'redevable/cin/'+cin.toString().trim());
  }

public findbyLocal(ref: any): Observable<Array<TaxeTrim>>{
  return this._http.get<Array<TaxeTrim>>(this._url+'local/ref/'+ref.toString().trim());
}

  public payer(info: InfoRecuTrim): Observable<number>{
    return this._http.post<number>(this._url, info);
  }

public findAll(): Observable<Array<TaxeTrim>>{
  return this._http.get<Array<TaxeTrim>>(this._url);
}

public delete(ref: String): Observable<number>{
  return this._http.delete<number>(this._url+'ref/'+ref);
}

}
