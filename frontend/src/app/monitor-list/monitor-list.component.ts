import { Component , OnInit,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Test} from 'tslint';
import { EquipService } from '../services/equip.service';
import { Equip } from '../models/equip';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.css']
})
@Injectable()

export class MonitorListComponent implements OnInit {

  equips: Observable<object>;
  success: boolean = false;
  configService: any;
  test: any;
  val: number = 3;
  query = '';
  country = '';
  isp = '';
  timezone = '';

  constructor(private equipService: EquipService, http: HttpClient) {
  }
  refresh(): void {
    window.location.reload();
}
  ping(){
    this.equips = this.equipService.ping();
    }
  shutdown(){
  this.equips = this.equipService.shutdown();
  }
  ngOnInit() {
    this.loadEquipsData();
    /*this.getIPAddress();*/
  }
  loadEquipsData(){
    this.equips = this.equipService.getEquipList();
    //this.equips = this.equipService.ping();
  }
   deleteequip(id){
    this.equipService.deleteequip(id)
      .subscribe(
        data => {
          this.success = true;
          this.loadEquipsData();
        },
        error => console.log("failed: " + error)
      )
  }
  getEquip(id){
    this.equipService.getEquip(id)
      .subscribe(
        data => {
          this.success = true;
          this.loadEquipsData();
        },
        error => console.log("failed: " + error)
      )
  }
  deleteAllequips(){
    this.equipService.deleteAllequips()
      .subscribe(
        data => {
          this.success = true;
          this.loadEquipsData();
        },
         error => console.log("failed: " + error)

      )
  }
  /*getIPAddress(){
    this.http.get("http://ip-api.com/json/").subscribe((res:any)=>{
    this.query = res.query
    this.country = res.country;
    this.isp = res.isp;
    this.timezone = res.timezone;
  });
}*/



  /*ngOnInit() {

    this.equips = this.equipService.ping();
    }
  }*/


  // updateequip(id){
  //   // @ts-ignore
  //   this.equipService.updateequip(id)
  //     .subscribe(
  //       data => {
  //         this.success = true;
  //         this.loadEquipsData();
  //       },
  //       error => console.log("failed: " + error)
  //     )
  // }


}
