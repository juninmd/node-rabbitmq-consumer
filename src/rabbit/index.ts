import * as amplib from 'amqplib';
import configs from '../configs';

export default class Rabbit {
  private static instance: Rabbit;

  private channelPromise?: Promise<amplib.Channel>;

  // Construtor privado: a instância única é controlada por getInstance().
  private constructor() {
    // intencionalmente vazio
  }

  public static getInstance(): Rabbit {
    if (!Rabbit.instance) {
      Rabbit.instance = new Rabbit();
    }
    return Rabbit.instance;
  }

  // Guarda a promise (não o canal) para que chamadas concorrentes compartilhem
  // uma única conexão em vez de abrir uma por chamada.
  public getChannel(): Promise<amplib.Channel> {
    if (!this.channelPromise) {
      this.channelPromise = amplib
        .connect(configs.rabbitmq)
        .then((connection) => connection.createChannel())
        .catch((error) => {
          this.channelPromise = undefined;
          throw error;
        });
    }
    return this.channelPromise;
  }
}
