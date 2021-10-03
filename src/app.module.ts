import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CepController } from './cep/cep.controller';
import { CepModule } from './cep/cep.module';

// Esse é o seu nexus

@Module({
  imports: [UserModule, CepModule],
  controllers: [AppController, CepController],
  providers: [AppService],
})
export class AppModule {}
