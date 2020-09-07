export class AEvent {
  private title: string;
  private start: Date;
  private end: Date;
  private description: string;
  private status: AEventStatus;


  // tslint:disable-next-line:ban-types
  private IsTicketed: Boolean;
  private participationFee: number;
  private maxParticipants: number;

}

enum AEventStatus {
  draft = 'DRAFT',
  published = 'PUBLISHED',
  cancelled = 'CANCELLED'
}
