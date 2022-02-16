import { Component, OnInit } from '@angular/core';
import { Equip } from "../models/equip";
import { EquipService} from "../services/equip.service";
import { ActivatedRoute , Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-monitor-create',
  templateUrl: './monitor-create.component.html',
  styleUrls: ['./monitor-create.component.css']
})
export class MonitorCreateComponent implements OnInit {
  equip: Equip = new Equip();
  success: boolean = false;
  equipSuits: any = ['MONASTIR','ENFIDHA']
  etatSuits: any = ['active','not active']

  constructor(private equipService: EquipService,
              private activatedRoute: ActivatedRoute,
              public  fb: FormBuilder,
              private router: Router) { }

  equipSuitsForm = this.fb.group({
    name: ['']
  })
  etatSuitsForm = this.fb.group({
    name: ['']
  })

  ngOnInit(): void {
  }
  onSubmit(){
    this.saveEquip();
    this.router.navigate(['/equips']);

  }
  saveEquip(){
    this.equipService.equipCreate(this.equip)
      .subscribe(
      data => {
        this.success = true;
        console.log(("new equip added!!"));
      },
      error => console.log(("sorry, cannot save!" + error))
    )
  }

}
