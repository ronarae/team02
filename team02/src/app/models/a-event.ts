export class AEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  status: AEventStatus;

  // tslint:disable-next-line:ban-types
  IsTicketed: Boolean;
  entranceFee: number;
  maxParticipants: number;

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
  public static createRandomAEvent(index): AEvent {
    // @ts-ignore
    const event = new AEvent();
    event.id = index + 20001;
    event.title = 'Fantastic event ' + index;

    let date = new Date();
    date.setMonth(date.getMonth() * (index + 1));
    event.start = date;

    date = new Date();
    date.setMonth(date.getMonth() * (index + 1));
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
    return event;


  }

}


export enum AEventStatus {
  draft = 'DRAFT',
  published = 'PUBLISHED',
  cancelled = 'CANCELLED'
}

