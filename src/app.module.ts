import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { PModule } from './p/p.module';
import { PModule } from './p/p.module';

@Module({
  imports: [UserModule, UploadModule, PModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
