import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Esse arquivo "mapeia" os serviços a possiveis requests - nesse caso qquer request get vai receber uma mensagem Hello World

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
