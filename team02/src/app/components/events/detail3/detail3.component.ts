import {Component, Input} from '@angular/core';
import {AEventsService} from '../../../services/a-events.service';
import {AEvent, AEventStatus} from '../../../models/a-event';

@Component({
  selector: 'app-detail3',
  templateUrl: './detail3.component.html',
  styleUrls: ['./detail3.component.css']
})
export class Detail3Component {
  @Input()
  get editedAEventId(): number { return this._editedAEventId; }
  set editedAEventId(eId: number) {
    this._editedAEventId = eId;

    // tslint:disable-next-line:max-line-length
    this.currentAEvent = Object.assign({}, this.aEventservice.findById(this.editedAEventId)); // assigned this.currentAEvent een kopie van de event die we hebben gevonden
  }
  // tslint:disable-next-line:variable-name
  private _editedAEventId = -1;

  currentAEvent: AEvent;

  constructor(private aEventservice: AEventsService) {

  }

  // tslint:disable-next-line:typedef
  getStatus(){
    return Object.values(AEventStatus);
  }

  // tslint:disable-next-line:typedef
  deleteCurrentAEvent(){
    if (this.aEventservice.deleteById(this.currentAEvent.id) != null) {
      this.editedAEventId = -1;
    }
  }

  // tslint:disable-next-line:typedef no-empty
  saveCurrentAEvent(){
    // tslint:disable-next-line:triple-equals
    const index = this.aEventservice.aEvents.findIndex((event) => event.id == this.currentAEvent.id);
    this.aEventservice.aEvents[index] = this.currentAEvent;
  }

  // tslint:disable-next-line:typedef no-empty
  clearCurrentAEvent(){
    // @ts-ignore
    const event = new AEvent();
    event.id = this.currentAEvent.id;
    this.currentAEvent = event;
  }

  // tslint:disable-next-line:no-empty
  resetCurrentAEvent(){
    this.currentAEvent = Object.assign({}, this.aEventservice.findById(this.editedAEventId));
  }

  // tslint:disable-next-line:no-empty
  cancelCurrentAEvent(){
    this.resetCurrentAEvent();
    // @ts-ignore
    this.editedAEventId = -1;
  }
}
