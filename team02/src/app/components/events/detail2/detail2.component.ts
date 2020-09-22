import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AEvent, AEventStatus} from '../../../models/a-event';

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css']
})
export class Detail2Component implements OnInit {
  @Input()
  data: AEvent = null;

  @Output()
  deleteEventInstanceEvent: EventEmitter<any> = new EventEmitter<any>();

  // tslint:disable-next-line:typedef
  deleteAEvent(data){
    return this.deleteEventInstanceEvent.emit(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getStatus(){
    return Object.values(AEventStatus);
  }
}
