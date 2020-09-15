import {Component, Input, OnInit} from '@angular/core';
import {AEvent, AEventStatus} from "../../../models/a-event";

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css']
})
export class Detail2Component implements OnInit {
  @Input()
  data: AEvent = null;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getStatus(){
    return Object.values(AEventStatus);
  }
}
