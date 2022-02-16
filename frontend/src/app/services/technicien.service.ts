import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technicien  } from "../models/technicien";

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

  private endpoint = 'http://localhost:8000/equips/techniciens/';

  constructor(private http: HttpClient) {
  }
//get a single Technicien
  getTechnicien(id: number):Observable<any>{
    return this.http.get(this.endpoint + id);
  }

  //get all Techniciens
  getTechnicienList(): Observable<any> {
    return this.http.get(this.endpoint );
  }

  //POST :add new technicien
  technicienCreate(technicien: Technicien):Observable<object>{
    return this.http.post(this.endpoint,technicien);
  }
  //update technicien
  updatetechnicien(id: number, payload: any):Observable<object>{
    return this.http.put(this.endpoint + id, payload);
  }

  //DELETE AN technicien
  deletetechnicien(id: number): Observable<any>{
    return this.http.delete(this.endpoint + id);
  }
  //DELETE ALL EQUIPS
  deleteAlltechniciens(): Observable<any>{
    return this.http.delete(this.endpoint);
  }

}
