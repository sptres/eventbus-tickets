import {
  Subjects,
  Publisher,
  ExprationCompleteEvent,
} from '@sptrestickets/common';

export class ExpirationCompletePublisher extends Publisher<ExprationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
