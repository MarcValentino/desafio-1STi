import { Controller, Get, Param } from '@nestjs/common';
import { response } from 'express';
import { request } from 'https';

@Controller('cep')
export class CepController {
  constructor() {}

  @Get(':cepNumber')
  async getCEPInfo(@Param('cepNumber') cepNumber : string){
    console.log("CEP: " + cepNumber)
    const CEPValidator = /^\d{8}$/;

    return await new Promise((resolve, reject) => {
      if(!CEPValidator.test(cepNumber)) resolve({ erro : "CEP invalido ou mal formatado"})
      const req = {
        hostname: `viacep.com.br`,
        path: `/ws/${cepNumber}/json/`,
        method: 'GET'
      };
      let httpRequest = request(req, (response) => {
        console.log(`Response status code: ${response.statusCode}`);
        response.on('data', data => {
          if(response.statusCode == 200){
            const result = JSON.parse(data);
            console.log(data.toString());
            resolve(result);
          } else {
            if(response.statusCode == 400) resolve({ erro : "CEP invalido ou mal formatado"})
          }
        })
      })

      httpRequest.on('error', err => {
        console.log(err);
        reject(new Error(err.toString()))
      })
        
      httpRequest.end();
    })
  }
}
