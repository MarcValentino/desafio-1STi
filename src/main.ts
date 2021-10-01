import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Aqui é de onde o seu app (sua API, no seu caso) efetivamente roda

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
