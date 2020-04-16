import {Date} from './date'
import {Time} from  './time'
export interface Event {
  eventId: number;
  eventName: string;
  eventDate: Date;
  eventTime: Time;
  eventExpire: boolean;
  eventDone: boolean;
  eventEdit:boolean;
  eventRate:number;
}
