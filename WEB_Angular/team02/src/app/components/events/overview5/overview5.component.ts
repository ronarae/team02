import {Component, OnInit} from '@angular/core';
import {AEventsService} from '../../../services/a-events.service';
import {AEvent} from '../../../models/a-event';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AEventsSbService} from "../../../services/a-events-sb.service";

@Component({
  selector: 'app-overview5',
  templateUrl: './overview5.component.html',
  styleUrls: ['./overview5.component.css']
})
export class Overview5Component implements OnInit {
  selectedAeventId = -1;


  constructor(public aEventservice: AEventsSbService,
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

  onSelect(eId:number) {
    //activate the details page for the given a-event Id
    this.router.navigate([eId], {relativeTo: this.activatedRoute});
  console.log("ID: " + eId);
  }

}
