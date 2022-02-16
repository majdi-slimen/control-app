import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equip  } from "../models/equip";


@Injectable({
  providedIn: 'root'
})
export class EquipService {

  private endpoint = 'http://localhost:8000/equips/';

  constructor(private http: HttpClient) {
  }
  public ping(){
    return this.http.post(this.endpoint + 'ping/',"5");
  }
  public shutdown(){
    return this.http.post(this.endpoint + 'shutdown/',"5");
  }
//get a single equip
  getEquip(id: number):Observable<any>{
    return this.http.get(this.endpoint + id);
  }
  //get all equips
  getEquipList(): Observable<any> {
    return this.http.get(this.endpoint);
  }
  //POST :add new equip
  equipCreate(equip: Equip):Observable<object>{
    return this.http.post(this.endpoint,equip);
  }
  //update equip
  updateequip(id: number, payload: any): Observable<object>{
    return this.http.put(this.endpoint + id, payload);
  }

  //DELETE AN EQUIP
  deleteequip(id: number): Observable<any>{
    return this.http.delete(this.endpoint + id);
  }
  //DELETE ALL EQUIPS
  deleteAllequips(): Observable<any>{
    return this.http.delete(this.endpoint);
  }

}
