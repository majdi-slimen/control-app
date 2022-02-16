import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MonitorListComponent } from './monitor-list/monitor-list.component';
import { MonitorCreateComponent } from './monitor-create/monitor-create.component';
import { MonitorEditComponent } from './monitor-edit/monitor-edit.component';
import { PanneListComponent } from './panne-list/panne-list.component';
import { PanneEditComponent } from './panne-edit/panne-edit.component';
import { PanneCreateComponent } from './panne-create/panne-create.component';
import { TechnicienCreateComponent } from './technicien-create/technicien-create.component';
import { TechnicienListComponent } from './technicien-list/technicien-list.component';
import { TechnicienEditComponent } from './technicien-edit/technicien-edit.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './log-in/log-in.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';


//import { FlexLayoutModule } from '@angular/flex-layout';
//import { MatCardModule } from '@angular/material/card';
//import { MatButtonModule} from '@angular/material/button';
/*import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';*/
//import { MonitorPingComponent } from './monitor-ping/monitor-ping.component';
import {RatingModule} from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    MonitorListComponent,
    MonitorCreateComponent,
    //EquipEditComponent,
    MonitorEditComponent,
    PanneListComponent,
    PanneEditComponent,
    PanneCreateComponent,
    TechnicienCreateComponent,
    TechnicienListComponent,
    TechnicienEditComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,


    //MonitorPingComponent,
    // CreateEquipComponent,
    // EquipDetailsComponent,
    // EquipsListComponent,
    // SearchEquipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     RatingModule,
    //AngularMaterialModule,
    //MatSliderModule,
    //FlexLayoutModule,
    HttpClientModule/*
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,*/
    //MatCardModule
  ],
  providers: [/*
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },*/

        // provider used to create fake backend
        fakeBackendProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]/*,
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]*/
})
export class AppModule { }
