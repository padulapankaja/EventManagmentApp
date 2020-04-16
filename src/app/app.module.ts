import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/online-planner/online-planner.component';

import { AutofocusModule } from 'angular-autofocus-fix';

import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';

// import time picker
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {NgbDatepickerModule, NgbRatingModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaterialTimepickerModule.setLocale('ar-AE'),
    FormsModule,
    MatSliderModule,
    NgbTimepickerModule,
    NgbDatepickerModule,
    MatDatepickerModule,
    NgbRatingModule,
    CountdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
