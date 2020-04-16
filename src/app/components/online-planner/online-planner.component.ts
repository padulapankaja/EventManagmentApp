import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
// import {stringify} from 'querystring';

//import interfaces

import {Event} from '../../interfaces/event';
import {Date} from '../../interfaces/date';
import {Time} from '../../interfaces/time';

import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list',
  templateUrl: './online-planner.component.html',
  styleUrls: ['./online-planner.component.css']
})
export class TodoListComponent implements OnInit {


  calendar: NgbCalendar;
  date: { year: number, month: number };


  currentRate = 3;

  events: Event[];
  eventId: number;
  eventName: string;
  eventDate: Date;
  eventTime: Time;
  eventExpire: boolean;
  eventDone: boolean;
  eventEdit: boolean;
  eventRate: number;
  //   before edit
  beforEditEventName: string;

  //filters
  filterDay: string;
  getCalanderDate: Date;

  //addstates
  addStates: boolean;


  ngOnInit() {
    this.filterDay = 'all';
    this.beforEditEventName = '';
    this.eventId = 4;
    this.eventName = '';
    this.eventDate = null;
    this.eventTime = null;
    this.eventExpire = false;
    this.eventDone = false;
    this.eventEdit = false;
    this.getCalanderDate = null;
    this.eventRate = 3;
    this.addStates = false;

    this.events = [
      {
        'eventId': 1,
        'eventName': 'This is my first event',
        'eventDate': {
          'year': '2020',
          'month': '04',
          'day': '15',

        },
        'eventTime': {
          'hour': '22',
          'minute': '58',
          'second': '0'
        },
        'eventExpire': false,
        'eventDone': false,
        'eventEdit': false,
        'eventRate': 3,
      },
      {
        'eventId': 2,
        'eventName': 'This is my secod event',
        'eventDate': {
          'year': '2020',
          'month': '07',
          'day': '05'
        },
        'eventTime': {
          'hour': '05',
          'minute': '58',
          'second': '0'
        },
        'eventExpire': false,
        'eventDone': false,
        'eventEdit': false,
        'eventRate': 3,
      },
      {
        'eventId': 3,
        'eventName': 'This is my third event',
        'eventDate': {
          'year': '2020',
          'month': '05',
          'day': '15'
        },
        'eventTime': {
          'hour': '02',
          'minute': '58',
          'second': '0'
        },
        'eventExpire': false,
        'eventDone': false,
        'eventEdit': false,
        'eventRate': 5,
      }
    ];
  }


  addEvent() {
    if (this.eventName.trim().length === 0 || this.eventDate == null || this.eventTime == null) {
      return alert('Please Fill Relevent  Details');
    }


    this.events.push({
      eventId: this.eventId,
      eventName: this.eventName,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventExpire: false,
      eventDone: false,
      eventEdit: false,
      eventRate: this.eventRate


    });
    this.eventName = '';
    this.eventId++;
    console.log(this.events);
    this.addStates = false;
  }

  addEventDate() {
    console.log(this.eventDate);

  }

  addEventTime() {
    console.log(this.eventTime);
  }

//  ------------------------- delete event ----------------------
  deleteEvent(id: number): void {
    this.events = this.events.filter(event => event.eventId !== id);
  }

//edit event
  editEvent(event: Event): void {
    this.beforEditEventName = event.eventName;
    event.eventEdit = true;
  }
  doneEdit(event: Event) {
    if (event.eventName.trim().length === 0) {
      event.eventName = this.beforEditEventName;
    }
    event.eventEdit = false;
  }
  remaingEvent(): number {
    return this.events.filter(event => !event.eventDone).length;
  }
  getEventDatebyCalander() {
    console.log(this.getCalanderDate.year);
  }

  eventFilterByDay(): Event[] {
    console.log(this.events);

    if (this.getCalanderDate === null) {
      return this.events;
    } else {
      return this.events.filter(event => event.eventDate.year == this.getCalanderDate.year && event.eventDate.month == this.getCalanderDate.month && event.eventDate.day == this.getCalanderDate.day);
    }

  }

//--------------get current date
  getcurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    var tempCurrentDate = {
      'year': year,
      'month': month,
      'day': day
    };

    console.log('Cuurent Date');
    console.log(tempCurrentDate);
    return tempCurrentDate;

  }

  checkeventExpireornot(eventDate, currentDate): boolean {
    if (eventDate.year <= currentDate.year && eventDate.month <= currentDate.month && eventDate.day <= currentDate.day) {
      return true;
    }
    return false;
  }

  getAddStatus(): boolean {
    return this.addStates;
  }
  changeAddStateFalse(): boolean {

    return this.addStates = false;
  }

  changeStat(): boolean {
    if (this.addStates === true) {
      return this.addStates = false;
    } else {
      return this.addStates = true;
    }
  }
  getnextEvent(){


}


}

