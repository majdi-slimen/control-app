import { Component, OnInit,Input } from '@angular/core';
import { Observable } from "rxjs";
import { Equip } from "../models/equip";
import { EquipService } from "../services/equip.service";
import { ActivatedRoute , Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-monitor-edit',
  templateUrl: './monitor-edit.component.html',
  styleUrls: ['./monitor-edit.component.css']
})
export class MonitorEditComponent implements OnInit {
 //equip = new Observable <Equip>;
  //equip: Observable<Equip>;
  equip: Equip;
  equipSuits: any = ['MONASTIR','ENFIDHA'];

  equip_id: number;
  success: boolean = false;


  constructor(private equipService: EquipService,
               private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.equip_id = Number(params.get("id"));
      }
    );
    this.loadEquipData();
  }

  loadEquipData() {
    this.equipService.getEquip(this.equip_id)
      .subscribe(
        data => {
          this.equip = data;
        }
      );
  }

  updateEquip() {
    this.equipService.updateequip(this.equip_id, this.equip)
      .subscribe(
        data => {
          this.equip = data as Equip;
          this.success = true;
        },
        error => console.log("cannot update!" + error)
      );
  }

  onSubmit() {
    this.updateEquip();
        this.router.navigate(['/equips']);


  }
}
