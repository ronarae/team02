import { Injectable } from '@angular/core';
import {AEvent} from "../models/a-event";



@Injectable({
  providedIn: 'root'
})
export class AEventsService {

  public aEvents: AEvent[];

  constructor() {
    this.aEvents = [];
    // for (let i = 0; i < 9; i++){
    //   this.addRandomAEvent()
    // };
  }

  //WIP 3.3

  // findAll(): AEvent[] {
  //   //TODO return all the list of all AEvents
  // }
  //
  // findById(eId: number): AEvent {
  //   //TODO find and return the AEvent with the specified ID
  //   // return null if none is found
  // }
  //
  // save(aEvents: AEvent): AEvent {
  //   //TODO replace the AEvent with the same id with the provided
  //   // return the old, replace aEvent
  //   // add the new aEvent if none existed and return null
  // }
  //
  // deleteById(eId: number): AEvent {
  //   //TODO remove identified aEvent from the collection
  //   // and return the remove instance
  //   // return null if none existed
  // }


}
