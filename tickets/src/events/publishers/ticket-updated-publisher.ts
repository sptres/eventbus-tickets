import { Publisher, Subjects, TicketUpdatedEvent } from '@sptrestickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
