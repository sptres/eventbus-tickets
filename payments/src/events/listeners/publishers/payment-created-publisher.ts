import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@sptrestickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
