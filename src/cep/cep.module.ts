import { Module } from '@nestjs/common';
import { CepController } from './cep.controller';

@Module({
    controllers: [CepController]
})
export class CepModule {}
