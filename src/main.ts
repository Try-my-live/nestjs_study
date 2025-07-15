import * as session from 'express-session';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'; // 新增导入

import { join } from 'path';
import * as cors from 'cors';

import { Response } from './common/response';
import { HttpFilter } from './common/filter';

async function bootstrap() {
  // 显式指定应用类型
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.use(session({ secret: "Lucky Lee", name: "lee.session", rolling: true, cookie: { maxAge: undefined } }));
  app.use(cors());
  
  // 修复静态资源服务
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: "/lee"
  });
  app.useGlobalInterceptors(new Response())
  app.useGlobalFilters(new HttpFilter())
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

