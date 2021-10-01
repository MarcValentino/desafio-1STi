import { Injectable } from '@nestjs/common';

// Esse arquivo é o responsável por efetivamente ter as funcionalidade implementadas

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
