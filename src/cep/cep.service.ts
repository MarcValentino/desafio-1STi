import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CepCache } from './models/cepCache.model';
import { request } from 'https';

@Injectable()
export class CepService {

  constructor(
    @InjectModel(CepCache)
    private cepCacheModel: typeof CepCache,
  ) {}

  async returnCEPInfo(cepNumber : string){
    console.log("CEP: " + cepNumber)
    const CEPValidator = /^\d{8}$/;
    return await new Promise(async (resolve, reject) => {
      await this.cepCacheModel.findOne({
        where: {
          cep: cepNumber
        }
      }).then(result => {
        if(result) resolve(result)
        else {
          if(!CEPValidator.test(cepNumber)) resolve({ erro : "CEP invalido ou mal formatado"})
          const req = {
            hostname: `viacep.com.br`,
            path: `/ws/${cepNumber}/json/`,
            method: 'GET'
          };
          let httpRequest = request(req, (response) => {
            console.log(`Response status code: ${response.statusCode}`);
            response.on('data', async data => {
              if(response.statusCode == 200){
                const result = JSON.parse(data);
                console.log(data.toString());
                if(!result.erro){
                  await this.cepCacheModel.create({
                    cep: cepNumber,
                    state: result.uf,
                    city: result.localidade,
                    district: result.bairro,
                    address: result.logradouro
                  }).then(row => 
                    resolve(row)
                  ).catch(error => {
                    resolve({erro : error})
                  });
                }else{
                  resolve({ erro : "Cep não encontrado na base do viacep!"});
                }
                
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
        }
      }).catch(err => reject(err));
      
    })
  }
}
