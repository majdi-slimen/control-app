import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panne  } from "../models/panne";

@Injectable({
  providedIn: 'root'
})
export class PanneService {

  private endpoint = 'http://localhost:8000/equips/pannes/';

  constructor(private http: HttpClient) {
  }
//get a single panne
  getPanne(id: number):Observable<any>{
    return this.http.get(this.endpoint + id);
  }

  //get all pannes
  getPanneList(): Observable<any> {
    return this.http.get(this.endpoint );
  }

  //POST :add new panne
  panneCreate(panne: Panne):Observable<object>{
    return this.http.post(this.endpoint,panne);
  }
  //update panne
  updatepanne(id: number, payload: any):Observable<object>{
    return this.http.put(this.endpoint + id, payload);
  }

  //DELETE AN panne
  deletepanne(id: number): Observable<any>{
    return this.http.delete(this.endpoint + id);
  }
  //DELETE ALL EQUIPS
  deleteAllpannes(): Observable<any>{
    return this.http.delete(this.endpoint);
  }

}
