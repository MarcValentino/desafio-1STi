import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CepModule } from './cep/cep.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/models/user.model';
import { CepCache } from './cep/models/cepCache.model'
// Esse é o seu nexus

@Module({
  imports: [
    UserModule, 
    CepModule, 
    SequelizeModule.forRoot({
      dialect : 'postgres',
      host: 'postgres-db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      models: [User, CepCache],
      synchronize: true,
      autoLoadModels: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
