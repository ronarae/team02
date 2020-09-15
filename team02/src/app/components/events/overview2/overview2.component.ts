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

  id = [];
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
  start = [];
  end = [];
  status = [];
  IsTicketed = [];
  entranceFee = [];
  maxParticipants = [];
  public aEvents: AEvent[];

  constructor() {
    // tslint:disable-next-line:typedef
    this.clickedRow = function(index){
      this.highlightRow = index;
    };
  }

 // tslint:disable-next-line:typedef
  public addRandomAEvent(index){
    this.aEvents.push(AEvent.createRandomAEvent(index));
  }

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.aEvents = [];
    for (let i = 0; i < this.title.length; i++) {
      const event = new AEvent(
        this.id[i],
        this.title[i],
        this.start[i],
        this.end[i],
        this.status[i],
        this.IsTicketed[i],
        this.entranceFee[i],
        this.maxParticipants[i]
      );
      this.aEvents.push(event);
    }
  }

  // tslint:disable-next-line:typedef
  isSelected(event){
  this.selectedAEvent = event;
  }
}
