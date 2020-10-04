import {Component, Input, OnInit} from '@angular/core';
import {AEvent, AEventStatus} from '../../../models/a-event';

@Component({
  selector: 'app-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.css']
})
export class Overview2Component implements OnInit {
  selectedAEvent = null;
  highlightRow: number;
  clickedRow: any;

  selectedIndex: number;
  selectedEvent: AEvent;


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

  start = [new Date(''),
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
    'PUBLISHED',
    'PUBLISHED',
    'PUBLISHED',
    'PUBLISHED',
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

  IsTicketed = [
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random() ),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random()),
    Math.round(Math.random() ),
    Math.round(Math.random()),
  ];

  public aEvents: AEvent[];

  constructor() {
    // tslint:disable-next-line:typedef
    this.clickedRow = function(index) {
      this.highlightRow = index;
    };
  }

  // tslint:disable-next-line:typedef
  public addRandomAEvent() {
    this.aEvents.push(AEvent.createRandomAEvent());
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.aEvents = [];
    for (let i = 0; i < 8; i++) {
        this.addRandomAEvent();
    }
  }
    // tslint:disable-next-line:typedef
    isSelected(event)
    {
      this.selectedAEvent = event;

      this.selectedIndex = event;
      this.selectedEvent = this.aEvents[event];
    }

    handleClick(): void {
    this.addRandomAEvent();
      for (let i = 0; i < this.aEvents.length; i++) {
        this.isSelected(i);
      }
    }
  // tslint:disable-next-line:typedef
    deleteEvent(event){
    const itemIndex = this.aEvents.indexOf(event);
    this.aEvents.splice(itemIndex, 1);
    this.selectedAEvent = null;
    }
}
