import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@sptrestickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
