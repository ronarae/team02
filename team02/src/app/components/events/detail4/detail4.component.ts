import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AEventsService} from '../../../services/a-events.service';
import {AEvent, AEventStatus} from '../../../models/a-event';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail4',
  templateUrl: './detail4.component.html',
  styleUrls: ['./detail4.component.css']
})
export class Detail4Component implements OnInit{
  // tslint:disable-next-line:variable-name
  public _editedAEventId: number = -1;

  currentAEvent: AEvent;

  @Output()
  editedAEventIdChange:EventEmitter<number> = new EventEmitter<number>();

  @Input()
  set editedAEventId(eId: number) {
    this._editedAEventId = eId;
    this.editedAEventIdChange.emit(eId);

    // tslint:disable-next-line:max-line-length
    this.currentAEvent = Object.assign({}, this.aEventservice.findById(this.editedAEventId)); // assigned this.currentAEvent een kopie van de event die we hebben gevonden
  }

  get editedAEventId(): number {
    return this._editedAEventId;
  }


  constructor(private aEventservice: AEventsService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {
  }

  private childParamsSubscription: Subscription = null;

  ngOnInit() {
    //get the event id query parameter from the activated route
    this.childParamsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      console.log("detail setup id= " + params['id'] || -1)
    })
  }

  ngOnDestroy(){
    //unsubscribe from the router before disappearing
    this.childParamsSubscription && this.childParamsSubscription.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  getStatus() {
    return Object.values(AEventStatus);
  }

  // tslint:disable-next-line:typedef
  deleteCurrentAEvent() {
    if (this.confirmMessage()) {
      if (this.aEventservice.deleteById(this.currentAEvent.id) != null) {
        this.editedAEventId = -1;
      }
    }
  }

  // tslint:disable-next-line:typedef no-empty
  saveCurrentAEvent(): void {
    // tslint:disable-next-line:triple-equals
    this.aEventservice.save(this.currentAEvent);
    this.resetCurrentAEvent();
  }

  // tslint:disable-next-line:typedef no-empty
  clearCurrentAEvent() {
    if (this.confirmMessage()) {
      // @ts-ignore
      const event = new AEvent();
      event.id = this.currentAEvent.id;
      this.currentAEvent = event;
    }
  }

  // tslint:disable-next-line:no-empty
  resetCurrentAEvent() {
    if (this.confirmMessage()) {
      this.currentAEvent = Object.assign({}, this.aEventservice.findById(this.editedAEventId));
    }
  }

  // tslint:disable-next-line:no-empty
  cancelCurrentAEvent() {
    if (this.confirmMessage()) {
      this.resetCurrentAEvent();
      // @ts-ignore
      this.editedAEventId = -1;
    }
  }

  confirmMessage() {
    // tslint:disable-next-line:triple-equals no-empty
    // @ts-ignore
    if (JSON.stringify(this.currentAEvent) !== JSON.stringify(this.aEventservice.findById(this.editedAEventId))) {
      return confirm("are you sure to discard unsaved changes?");
    }
    return true;
  }

  disableButton() {
    // tslint:disable-next-line:triple-equals
    if (JSON.stringify(this.currentAEvent) == JSON.stringify(this.aEventservice.findById(this.editedAEventId))) {
      return true;
    }
    return false;
  }
}
