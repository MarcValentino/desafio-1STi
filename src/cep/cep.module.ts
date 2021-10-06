import { Module } from '@nestjs/common';
import { CepController } from './cep.controller';
import { CepCache } from './models/cepCache.model'
import { SequelizeModule } from '@nestjs/sequelize';
import { CepService } from './cep.service';

@Module({
    imports: [SequelizeModule.forFeature([CepCache])],
    providers: [CepService],
    controllers: [CepController]
    
})
export class CepModule {}
