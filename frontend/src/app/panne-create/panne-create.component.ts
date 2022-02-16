import { Component, OnInit } from '@angular/core';
import { Panne } from "../models/panne";
import { PanneService} from "../services/panne.service";
import { TechnicienService } from '../services/technicien.service';
import { Technicien } from '../models/technicien';
import { ActivatedRoute , Router } from "@angular/router";
import { Observable } from "rxjs";
import { FormBuilder } from "@angular/forms";




@Component({
  selector: 'app-panne-create',
  templateUrl: './panne-create.component.html',
  styleUrls: ['./panne-create.component.css']
})
export class PanneCreateComponent implements OnInit {
  panne: Panne = new Panne();
  success: boolean = false;
  //------------------
  techSuits: any = ['MAJDI','YASIN']


  //**********************************************************************/

  constructor(private panneService: PanneService,
              public  fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


  //-----------
  techSuitsForm = this.fb.group({
    name: ['']
  })


  //---------
  ngOnInit(): void {
  }
  onSubmit(){
    this.savePanne();
        this.router.navigate(['/pannes']);

  }
  savePanne(){
    this.panneService.panneCreate(this.panne)
      .subscribe(
      data => {
        this.success = true;
        console.log(("new panne added!!"));
      },
      error => console.log(("sorry, cannot save!" + error))
    )
  }

}
