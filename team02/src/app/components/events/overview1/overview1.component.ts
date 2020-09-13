import { Component, OnInit } from '@angular/core';
import {AEvent, AEventStatus} from '../../../models/a-event';

@Component({
  selector: 'app-overview1',
  templateUrl: './overview1.component.html',
  styleUrls: ['./overview1.component.css']
})
export class Overview1Component implements OnInit {

  id = ['20001', '20002', '20003', '20004', '20005', '20006', '20007', '20008', '20009'];
  title = ['Fantastic Event 0 ',
    'Fantastic Event 1',
    'Fantastic Event 2',
    'Fantastic Event 3',
    'Fantastic Event 4',
    'Fantastic Event 5',
    'Fantastic Event 6',
    'Fantastic Event 7',
    'Fantastic Event 8',
  ];
  start = [new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
  ];
  end = [new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
    new Date('4/9/2020'),
  ];
  status = ['CANCELLED',
    'PUBLISHED',
    'CANCELLED',
    'CANCELLED',
    'DRAFT',
    'CANCELLED',
    'CANCELLED',
    'PUBLISHED',
    'CANCELLED',
  ];
  entranceFee = [Math.floor(Math.random() * 6) * 10,
    Math.floor(Math.random() * 6) * 10,
    Math.floor(Math.random() * 6) * 10,
    Math.floor(Math.random() * 6) * 10,
    Math.floor(Math.random() * 6) * 10,
    Math.floor(Math.random() * 6) * 10,
    Math.floor(Math.random() * 6) * 10,
    Math.floor(Math.random() * 6) * 10,
    Math.floor(Math.random() * 6) * 10,
  ];
  maxParticipants = [Math.floor((Math.random() + 1) * 6) * 100,
    Math.floor((Math.random() + 1) * 6) * 100,
    Math.floor((Math.random() + 1) * 6) * 100,
    Math.floor((Math.random() + 1) * 6) * 100,
    Math.floor((Math.random() + 1) * 6) * 100,
    Math.floor((Math.random() + 1) * 6) * 100,
    Math.floor((Math.random() + 1) * 6) * 100,
    Math.floor((Math.random() + 1) * 6) * 100,
    Math.floor((Math.random() + 1) * 6) * 100,
  ];

  IsTicketed = [];

  public aEvents: AEvent[];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  public addRandomAEvent(index){
    this.aEvents.push(AEvent.createRandomAEvent(index));
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.aEvents = [];
    for (let i = 0; i < this.id.length; i++) {
      const event =  new AEvent(
        this.id[i],
        this.title[i],
        this.start[i],
        this.end[i],
        this.status[i],
        this.IsTicketed[i],
        this.entranceFee[i],
        this.maxParticipants[i]
      );
      console.log(event.id);

      this.aEvents.push(event);
    }
  }


}

