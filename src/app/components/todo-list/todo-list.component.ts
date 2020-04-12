import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  calendar: NgbCalendar;
  date: {year: number, month: number};


  events: object[] ;
  eventId: number;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventExpire: boolean;
  eventDone: boolean;

  constructor() { }

  ngOnInit() {
    this.eventId = 4;
    this.eventName = '';
    this.eventDate = '';
    this.eventTime = '';
    this.eventExpire = false;
    this.eventDone = false;

    this.events = [
      {
        'id' : 1,
        'eventName' : 'This is my first event',
        'eventDate' : '2020.04.20',
        'eventTime' : '02.00 A.M',
        'eventExpire' : false,
        'eventDone' : false,
      },
      {
        'id' : 2,
        'eventName' : 'This is my secod event',
        'eventDate' : '2020.04.20',
        'eventTime' : '02.00 A.M',
        'eventExpire' : false,
        'eventDone' : false,
      },
      {
        'id' : 3,
        'eventName' : 'This is my third event',
        'eventDate' : '2020.04.20',
        'eventTime' : '02.00 A.M',
        'eventExpire' : false,
        'eventDone' : false,
      }
    ];
  }


  addEvent(){
    if (this.eventName.trim().length === 0){
      return alert("Please enter event name");
    }
    this.events.push({
      id :  this.eventId,
      eventName: this.eventName,
      eventDate: '2020',
      eventTime : '05.00 A.M',
      eventExpire : false,
      eventDone : false,

    });
    this.eventName = '';
    this.eventId++;
    console.log(this.events);
  }

  addEventDate(){

    console.log( this.eventDate );
  }


}
