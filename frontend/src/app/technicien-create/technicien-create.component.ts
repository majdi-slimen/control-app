import { Component, OnInit } from '@angular/core';
import { Technicien } from "../models/technicien";
import { TechnicienService} from "../services/technicien.service";
import { ActivatedRoute , Router } from "@angular/router";
import { Observable } from "rxjs";



@Component({
  selector: 'app-technicien-create',
  templateUrl: './technicien-create.component.html',
  styleUrls: ['./technicien-create.component.css']
})
export class TechnicienCreateComponent implements OnInit {
techniciensList = ['majdi', 'yassin'];
  technicien: Technicien = new Technicien();
  success: boolean = false;

  constructor(private technicienService: TechnicienService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.saveTechnicien();
        this.router.navigate(['/techniciens']);

  }
  saveTechnicien(){
    this.technicienService.technicienCreate(this.technicien)
      .subscribe(
      data => {
        this.success = true;
        console.log(("new technicien added!!"));
      },
      error => console.log(("sorry, cannot save!" + error))
    )
  }

}
