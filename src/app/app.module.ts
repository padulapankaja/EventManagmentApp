import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


import { FormsModule } from '@angular/forms';

// import time picker
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {NgbDatepickerModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaterialTimepickerModule.setLocale('ar-AE'),
    FormsModule,
    MatSliderModule,
    NgbTimepickerModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
