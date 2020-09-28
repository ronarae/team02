export class AEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  status: AEventStatus;

  // tslint:disable-next-line:ban-types
  IsTicketed: number;
  entranceFee: number;
  maxParticipants: number;
  private static counter: number = 0;

  constructor(id, title, start, end, status, IsTicketed, entranceFee, maxParticipants) {
    this.id = id;
    this.title = title;
    this.start = start;
    this.end = end;
    this.status = status;
    this.IsTicketed = IsTicketed;
    this.entranceFee = entranceFee;
    this.maxParticipants = maxParticipants;
  }

  // tslint:disable-next-line:typedef
  public static createRandomAEvent(): AEvent {
    // @ts-ignore
    const event = new AEvent();
    // @ts-ignore
    event.id = 20001 + this.counter++;
    event.title = 'Fantastic event ' + this.counter;

    let date = new Date();
    date.setMonth(date.getMonth() * (this.counter + 1));
    event.start = date;

    date = new Date();
    date.setMonth(date.getMonth() * (this.counter + 1));
    event.end = date;

    const rand = Math.floor(Math.random() * Object.keys(AEventStatus).length);
    const randomStatus = AEventStatus[Object.keys(AEventStatus)[rand]];
    event.status = randomStatus;

    event.entranceFee = Math.floor(Math.random() * 6) * 10;
    event.maxParticipants = Math.floor((Math.random() + 1) * 6) * 100;


    if (event.status === 'PUBLISHED'){
      event.entranceFee = Math.floor(Math.random() * 6) * 10;
      event.maxParticipants = Math.floor((Math.random() + 1) * 6) * 100;
    } else {
      const fee = null;
      event.entranceFee = fee || 'free';
      event.maxParticipants = fee;
    }

    event.IsTicketed  = Math.round(Math.random());
    return event;


  }

}

export enum AEventStatus {
  draft = 'DRAFT',
  published = 'PUBLISHED',
  cancelled = 'CANCELLED'
}

// tslint:disable-next-line:max-classes-per-file
export class Title {
  title: string;
}



