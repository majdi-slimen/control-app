import { Component, OnInit,Input } from '@angular/core';
import { Observable } from "rxjs";
import { Panne } from "../models/panne";
import { PanneService } from "../services/panne.service";
import { ActivatedRoute , Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-panne-edit',
  templateUrl: './panne-edit.component.html',
  styleUrls: ['./panne-edit.component.css']
})
export class PanneEditComponent implements OnInit {

  panne:  Panne;
  techSuits: any = ['MAJDI','YASIN'];
  panne_id: number;
  success: boolean = false;


  constructor(private panneService: PanneService,
              public  fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }
  techSuitsForm = this.fb.group({
    name: ['']
  })

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.panne_id = Number(params.get("id"))
      }
    );
    this.loadEquipData();
  }

  loadEquipData() {
    this.panneService.getPanne(this.panne_id)
      .subscribe(
        data => {
          this.panne = data;
        }
      );
  }

  updatePanne() {
    this.panneService.updatepanne(this.panne_id, this.panne)
      .subscribe(
        data => {
          this.panne = data as Panne;
          this.success = true;
        },
        error => console.log("cannot update!" + error)
      );
  }

  onSubmit() {
    this.updatePanne();
    this.router.navigate(['/pannes']);

  }
}
