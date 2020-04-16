import {Component, OnInit} from '@angular/core';
import {Date} from './interfaces/date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Online Planner';
  //greeting title
  greetingUser : string;
  ngOnInit(){
    this.greetingUser  = 'Hello, Welcome ! ';
    this.greeting();
  }

  greeting():String{
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51
    if(d.getHours() >= 13 && d.getHours() <= 18){
      this.greetingUser = "Hey, Good Evening";
    }else if(d.getHours() >= 19){
      this.greetingUser = "Hey, Good Night"
    }else if(d.getHours() >= 0 && d.getHours() <= 12){
      this.greetingUser = "Hey, Good Morning"
    }

    return this.greetingUser;
  }


  getToday():String{
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,' - ');

    return utc;


  }
}
