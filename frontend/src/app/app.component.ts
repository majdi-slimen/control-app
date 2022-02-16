
import { Component , OnInit,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Test} from 'tslint';
import { EquipService } from './services/equip.service';
import { TechnicienService } from './services/technicien.service';
import { PanneService } from './services/panne.service';
import { Equip } from './models/equip';
import { Technicien } from './models/technicien';
import { Panne } from './models/panne';
import {HttpClient} from "@angular/common/http";
import "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'monitor';

}

