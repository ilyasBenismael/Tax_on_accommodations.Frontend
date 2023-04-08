import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Redevablee} from "../model/redevablee";
import {Local} from "../model/local";

@Injectable({
  providedIn: 'root'
})
export class EarthService {

  private _url = 'http://localhost:8036/api/v1/';
  constructor(private _http: HttpClient) { }

public findBySecteur(code: String): Observable<Array<Local>>{
  return this._http.get<Array<Local>>(this._url+'local/rue/quartier/secteur/code/'+code.toString().trim());
}

//
  public findByQuartier(code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/rue/quartier/code/'+code.toString().trim());
  }

  public findByRue(code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/rue/code/'+code.toString().trim());
  }


  public findByCinAndSecteur(cin:String, code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/redevable/cin/'+cin.toString().trim()+'/rue/quartier/secteur/code/'+code.toString().trim());
  }

  public findByCinAndQuartier(cin:String, code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/redevable/cin/'+cin.toString().trim()+'/rue/quartier/code/'+code.toString().trim());
  }

  public findByCinAndRue(cin:String, code: String): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/redevable/cin/'+cin.toString().trim()+'/rue/code/'+code.toString().trim());
  }



  public findRedevablebyCin(cin: any): Observable<Redevablee>{
    return this._http.get<Redevablee>(this._url+'redevable/cin/'+cin.toString().trim());
  }

  public findLocalbyCin(cin: any): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/redevable/cin/'+cin.toString().trim());
  }

  public findAllLocals(): Observable<Array<Local>>{
    return this._http.get<Array<Local>>(this._url+'local/');
  }

  public findAllRedevable(): Observable<Array<Redevablee>>{
    return this._http.get<Array<Redevablee>>(this._url+'redevable/');
  }




}
