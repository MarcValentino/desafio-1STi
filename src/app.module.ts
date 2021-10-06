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
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: 'docker',
      database: 'postgres',
      models: [User, CepCache],
      synchronize: true,
      autoLoadModels: true
    })], //só estabelece a conexão, n cria
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
