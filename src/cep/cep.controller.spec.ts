import { Test, TestingModule } from '@nestjs/testing';
import { CepController } from './cep.controller';

describe('CepController', () => {
  let controller: CepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CepController],
    }).compile();

    controller = module.get<CepController>(CepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getCEPInfo', () => {
    it('should return desired address or error', async () => {
      const result1 = {
        cep: "22290-000",
        logradouro: "Rua Fernandes Guimarães",
        complemento: "",
        bairro: "Botafogo",
        localidade: "Rio de Janeiro",
        uf: "RJ",
        ibge: "3304557",
        gia: "",
        ddd: "21",
        siafi: "6001"
      };
      const result2 = {
        "cep": "22290-010",
        "logradouro": "Rua São Manuel",
        "complemento": "",
        "bairro": "Botafogo",
        "localidade": "Rio de Janeiro",
        "uf": "RJ",
        "ibge": "3304557",
        "gia": "",
        "ddd": "21",
        "siafi": "6001"      
      }
      const result3 = { erro: `CEP invalido ou mal formatado` }
      expect(await controller.getCEPInfo('22290000')).toStrictEqual(result1);
      expect(await controller.getCEPInfo('22290010')).toStrictEqual(result2);
      expect(await controller.getCEPInfo('2229001')).toThrow(Error)
    })
  })


});
