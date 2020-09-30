import {Component, OnInit} from '@angular/core';
import {AEventsService} from '../../../services/a-events.service';
import {AEvent} from '../../../models/a-event';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-overview4',
  templateUrl: './overview4.component.html',
  styleUrls: ['./overview4.component.css']
})
export class Overview4Component implements OnInit {
  selectedAeventId = -1;


  constructor(public aEventservice: AEventsService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // get the event id query parameter from the activated route
    this.activatedRoute.firstChild.params.subscribe((params: Params) => {
      this.selectedAeventId = (params.id || -1);
    })
  }

  handleClick() {
    this.aEventservice.addRandomAEvent();
  }

}
