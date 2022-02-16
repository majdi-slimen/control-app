import { Component , OnInit,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Test} from 'tslint';
import { PanneService } from '../services/panne.service';
import { Panne } from '../models/panne';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-panne-list',
  templateUrl: './panne-list.component.html',
  styleUrls: ['./panne-list.component.css']
})
@Injectable()

export class PanneListComponent implements OnInit {

  pannes: Observable<object>;
  success: boolean = false;
  configService: any;
  test: any;

  constructor(private panneService: PanneService, http: HttpClient) {
  }

  ngOnInit() {
    this.loadPannesData();
  }
  loadPannesData(){
    this.pannes = this.panneService.getPanneList();
    //this.equips = this.equipService.ping();
  }
   deletepanne(id){
    this.panneService.deletepanne(id)
      .subscribe(
        data => {
          this.success = true;
          this.loadPannesData();
        },
        error => console.log("failed: " + error)
      )
  }
  /*
  deleteAllpannes(){
    this.panneService.deleteAllpannes()
      .subscribe(
        data => {
          this.success = true;
          this.loadPannesData();
        },
         error => console.log("failed: " + error)

      )
  }


  ngOnInit() {

    this.equips = this.equipService.ping();
    }
  }

  // testMethodInConfigComponentTS() {
  //   this.configService.testMethodInConfigServiceTS()
  //     .subscribe(
  //       (data: Test) => this.test = { ...data }, // success path
  //       error => this.error = error // error path
  //     );
  // }
 // testMethodInConfigComponentTS() {
 //  this.configService.testMethodInConfigServiceTS()
 //    .subscribe(
 //       data  =>{
 //        this.test = {...data}
 //      }, // success path
 //      error => console.log("failed: " + error)
 //    );
 //  }
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

  ping(){
    this.equips = this.equipService.ping();
    }

  $http.get("ping/")
  .then(function(output) {
    $scope.testUser = output;
    console.log($scope.testUser);
    });*/

}
