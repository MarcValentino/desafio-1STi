import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';

@Controller('cep')
export class CepController {
  constructor( private readonly cepService: CepService
    ) {}
  
  @Get(':cepNumber')
  async getCEPInfo(@Param('cepNumber') cepNumber : string){
    return await this.cepService.returnCEPInfo(cepNumber);
  }
}
