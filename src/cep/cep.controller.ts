import { Controller, Get, Param } from '@nestjs/common';
import { request } from 'https';

@Controller('cep')
export class CepController {
  constructor() {}

  @Get(':cepNumber')
  async getCEPInfo(@Param('cepNumber') cepNumber : string){
    console.log("CEP: " + cepNumber)
    return await new Promise((resolve, reject) => {
      const req = {
        hostname: `viacep.com.br`,
        path: `/ws/${cepNumber}/json/`,
        method: 'GET'
      };
      let httpRequest = request(req, (response) => {
        console.log(`Response status code: ${response.statusCode}`);
        response.on('data', data => {
          console.log(data.toString())
          resolve(JSON.parse(data));
        })
      })

      httpRequest.on('error', err => {
        console.log(err);
        reject(err);
      })
        
      httpRequest.end();
    })
  }
}
