import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorListComponent } from "./monitor-list/monitor-list.component";
import { PanneListComponent } from "./panne-list/panne-list.component";
import { TechnicienListComponent } from "./technicien-list/technicien-list.component";
import { MonitorCreateComponent } from "./monitor-create/monitor-create.component";
import { PanneCreateComponent } from "./panne-create/panne-create.component";
import { TechnicienCreateComponent } from "./technicien-create/technicien-create.component";
import { MonitorEditComponent } from "./monitor-edit/monitor-edit.component";
import { PanneEditComponent } from "./panne-edit/panne-edit.component";
import { TechnicienEditComponent } from "./technicien-edit/technicien-edit.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./log-in/log-in.component";
import { RegisterComponent } from "./register/register.component";
//import { MonitorPingComponent } from "./monitor-ping/monitor-ping.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'equips', component: MonitorListComponent },
     { path: 'home', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'pannes', component: PanneListComponent },
     { path: 'techniciens', component: TechnicienListComponent },
     { path: 'add_equip', component: MonitorCreateComponent },
     { path: 'add_panne', component: PanneCreateComponent },
     { path: 'add_technicien', component: TechnicienCreateComponent },
     { path: 'edit_equip/:id', component: MonitorEditComponent },
     { path: 'edit_panne/:id', component: PanneEditComponent },
     { path: 'edit_technicien/:id', component: TechnicienEditComponent },
     //{ path: 'ping', component: MonitorPingComponent }

];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
