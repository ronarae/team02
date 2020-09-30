import {Injectable} from '@angular/core';
import {AEvent} from '../models/a-event';


@Injectable({
  providedIn: 'root'
})
export class AEventsService {
  public aEvents: AEvent[];

  constructor() {
    this.aEvents = [];
    for (let i = 0; i < 9; i++) {
      this.addRandomAEvent();
    }
  }

  // tslint:disable-next-line:typedef
  addRandomAEvent() {
    this.aEvents.push(AEvent.createRandomAEvent());
  }

  findAll(): AEvent[] {
    // TODO return all the list of all AEvents
    return this.aEvents;
  }

  findById(eId: number): AEvent {
    // TODO find and return the AEvent with the specified ID return null if none is found

    // tslint:disable-next-line:triple-equals
    return this.aEvents.find((event) => event.id == eId);
  }

  // @ts-ignore
  save(aEvent: AEvent): void {
    // tslint:disable-next-line:max-line-length
    // TODO replace the AEvent with the same id with the provided return the old, replace aEvent add the new aEvent if none existed and return null
    // tslint:disable-next-line:triple-equals
    // @ts-ignore
    // tslint:disable-next-line:triple-equals no-unused-expression
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    this.aEvents[this.aEvents.findIndex((event) => event.id == aEvent.id)] = aEvent;
  }

  deleteById(eId: number): AEvent {
    // TODO remove identified aEvent from the collection and return the remove instance, return null if none existed
    // tslint:disable-next-line:triple-equals
    const index = this.aEvents.findIndex((event) => event.id == eId); // haalt index op
    // tslint:disable-next-line:triple-equals
    if (index == -1) {
      return null;
    }
    return this.aEvents.splice(index, 1)[0]; // haalt de plek van de index weg en returned wat gespliced is. splice geeft array terug.
  }

}
