import {Component, OnInit} from '@angular/core';
import {AEventsService} from '../../../services/a-events.service';
import {AEvent} from '../../../models/a-event';

@Component({
  selector: 'app-overview3',
  templateUrl: './overview3.component.html',
  styleUrls: ['./overview3.component.css']
})
export class Overview3Component implements OnInit {
  selectedAeventId: number = -1;


  constructor(public aEventservice: AEventsService) {
  }

  // tslint:disable-next-line:no-empty
  ngOnInit(): void {
  }

  onEventSelected(aEvent: AEvent): void {
    this.selectedAeventId = aEvent.id;
  }

  // tslint:disable-next-line:typedef

  handleClick() {
    this.aEventservice.addRandomAEvent();
  }
}
