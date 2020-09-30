import {Component, OnInit} from '@angular/core';
import {AEventsService} from '../../../services/a-events.service';
import {AEvent} from '../../../models/a-event';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-overview4',
  templateUrl: './overview4.component.html',
  styleUrls: ['./overview4.component.css']
})
export class Overview4Component implements OnInit {
  //selectedAeventId = -1;


  constructor(public aEventservice: AEventsService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  // tslint:disable-next-line:no-empty
  ngOnInit(): void {
  }
  //
  // onEventSelected(aEvent: AEvent): void {
  //   this.selectedAeventId = aEvent.id;
  // }

  // tslint:disable-next-line:typedef

  handleClick() {
    this.aEventservice.addRandomAEvent();
  }

  onSelect(eId:number) {
    //activate the details page for the given a-event Id
    this.router.navigate([eId], {relativeTo: this.activatedRoute, queryParams: {id:eId}});
    console.log("ID: " + eId);
  }
}
