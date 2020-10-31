import {Injectable} from '@angular/core';
import {AEvent} from '../models/a-event';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AEventsSbService {
  public aEvents: AEvent[];

  constructor(private http: HttpClient) {
    this.aEvents = [];
    this.restGetAEvents().subscribe(data => {
      for (const value of data) {
        this.aEvents.push(AEvent.trueCopy(value));
      }
    });
  }

  // tslint:disable-next-line:typedef
  addRandomAEvent() {
    this.restPostAEvent(AEvent.createRandomAEvent()).subscribe(aEvent => {
      this.aEvents.push(AEvent.trueCopy(aEvent));
    })
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
    this.aEvents[this.aEvents.findIndex((x) => x.id == aEvent.id)] = aEvent;
    this.restPutAEvent(aEvent).subscribe(data => console.log(data));
  }

  deleteById(eId: number): AEvent {
    this.restDeleteAEvent(eId);
    const index = this.aEvents.findIndex((x) => x.id == eId);
    if (index == -1) {
      return null;
    } else {
      return this.aEvents.splice(index, 1)[0];
    }
  }

  // @ts-ignore
  private restGetAEvents(): Observable<AEvent[]> {
    return this.http.get<AEvent[]>('http://localhost:8080/aevents');
  }

  private restPostAEvent(aEvent: AEvent):Observable<AEvent> {
    return this.http.post<AEvent>("http://localhost:8080/aevents", aEvent);
  }

  private restPutAEvent(aEvent: AEvent):Observable<AEvent> {
    return this.http.put<AEvent>("http://localhost:8080/aevents/" + aEvent.id, aEvent);
  }

  private restDeleteAEvent(aEventId: number): void {
    this.http.delete<AEvent>("http://localhost:8080/aevents/" + aEventId).subscribe(data => console.log(data));
  }

}
