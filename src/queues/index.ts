import { Queues } from '../enums';
import Consumer from '../consumer';

const logConsumer = new Consumer(Queues.log);
logConsumer.receiveMessage();

const orderConsumer = new Consumer(Queues.order);
orderConsumer.receiveMessage();