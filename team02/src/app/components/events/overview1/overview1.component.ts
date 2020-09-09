import { Component, OnInit } from '@angular/core';
import {AEvent, AEventStatus} from '../../../models/a-event';

@Component({
  selector: 'app-overview1',
  templateUrl: './overview1.component.html',
  styleUrls: ['./overview1.component.css']
})
export class Overview1Component implements OnInit {


  public aEvents: AEvent[];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.aEvents = [];
    for (let i = 0; i < 9; i++) {
      this.aEvents.push(this.addRandomAEvent(i));
    }
  }

  // tslint:disable-next-line:typedef
  public addRandomAEvent(index) {
  const event = new AEvent();
  event.title = 'Fantastic event ' + index;

  let date = new Date();
  date.setMonth(date.getMonth() * (index + 1));
  event.start = date;

  date = new Date();
  date.setMonth(date.getMonth() * (index + 1));
  event.end = date;

  const rand = Math.floor(Math.random() * Object.keys(AEventStatus).length);
  const randomStatus = AEventStatus[Object.keys(AEventStatus)[rand]];
  event.status = randomStatus;

  event.participationFee = Math.floor(Math.random() * 6) * 10;
  event.maxParticipants = Math.floor((Math.random() + 1) * 6) * 1000;

  console.log('added events');
  return event;
  }

}

