
import * as session from 'express-session'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

 
 
