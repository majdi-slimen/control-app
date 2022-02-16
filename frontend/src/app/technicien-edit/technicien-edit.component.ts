import { Component, OnInit,Input } from '@angular/core';
import { Observable } from "rxjs";
import { Technicien } from "../models/technicien";
import { TechnicienService } from "../services/technicien.service";
import { ActivatedRoute , Router } from "@angular/router";

@Component({
  selector: 'app-technicien-edit',
  templateUrl: './technicien-edit.component.html',
  styleUrls: ['./technicien-edit.component.css']
})
export class TechnicienEditComponent implements OnInit {

  technicien:  Technicien;
  technicien_id: number;
  success: boolean = false;


  constructor(private technicienService: TechnicienService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.technicien_id = Number(params.get("id"))
      }
    );
    this.loadTechnicienData();
  }

  loadTechnicienData() {
    this.technicienService.getTechnicien(this.technicien_id)
      .subscribe(
        data => {
          this.technicien = data;
        }
      );
  }

  updateTechnicien() {
    this.technicienService.updatetechnicien(this.technicien_id,this.technicien)
      .subscribe(
        data => {
          this.technicien = data as Technicien;
          this.success = true;
        },
        error => console.log("cannot update!" + error)
      );
  }

  onSubmit() {
    this.updateTechnicien();
    this.router.navigate(['/techniciens']);

  }
}
