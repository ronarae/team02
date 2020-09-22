import { Component, OnInit } from '@angular/core';
import {AEventsService} from '../../../services/a-events.service';
import {AEvent} from '../../../models/a-event';

@Component({
  selector: 'app-overview3',
  templateUrl: './overview3.component.html',
  styleUrls: ['./overview3.component.css']
})
export class Overview3Component implements OnInit {
    selectedAeventId = -1;

  constructor(public aEventservice: AEventsService) {
  }

  ngOnInit(): void {
  }

  onEventSelected(aEvent: AEvent): void
  {
    this.selectedAeventId = aEvent.id;
  }

  // tslint:disable-next-line:typedef
  addRandomAEvent(){
    this.aEventservice.addRandomAEvent();
  }

  // tslint:disable-next-line:typedef
  clickedOn(index: number){
    this.selectedAeventId = index;
  }

}
