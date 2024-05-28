import { Publisher, OrderCreatedEvent, Subjects } from '@sptrestickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
