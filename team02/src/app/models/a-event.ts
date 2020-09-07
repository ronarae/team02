export class AEvent {
  title: string;
  start: Date;
  end: Date;
  description: string;
  status: AEventStatus;

  // tslint:disable-next-line:ban-types
  IsTicketed: Boolean;
  participationFee: number;
  maxParticipants: number;

}

enum AEventStatus {
  draft = 'DRAFT',
  published = 'PUBLISHED',
  cancelled = 'CANCELLED'
}
