import { Queues } from '../enums';
import Rabbit from '../rabbit'
export default class Consumer {

  private queue: Queues;
  constructor(queue: Queues) {
    this.queue = queue;
  }

  async receiveMessage() {
    try {
      const ch = await Rabbit.getInstance().getChannel();
      await ch.assertQueue(this.queue, { durable: true });

      await ch.consume(this.queue, function (msg) {
        const result = msg.content.toString();
        ch.ack(msg);
        console.log(result);
      })
    } catch (error) {
      console.error(error);
    }
  }
}