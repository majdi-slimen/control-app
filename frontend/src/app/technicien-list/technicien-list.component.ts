import { Component , OnInit,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Test} from 'tslint';
import { TechnicienService } from '../services/technicien.service';
import { Technicien } from '../models/technicien';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-technicien-list',
  templateUrl: './technicien-list.component.html',
  styleUrls: ['./technicien-list.component.css']
})
@Injectable()

export class TechnicienListComponent implements OnInit {

  techniciens: Observable<object>;
  success: boolean = false;
  configService: any;
  test: any;

  constructor(private technicienService: TechnicienService, http: HttpClient) {
  }

  ngOnInit() {
    this.loadTechniciensData();
  }
  loadTechniciensData(){
    this.techniciens = this.technicienService.getTechnicienList();
  }
   deletetechnicien(id){
    this.technicienService.deletetechnicien(id)
      .subscribe(
        data => {
          this.success = true;
          this.loadTechniciensData();
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
