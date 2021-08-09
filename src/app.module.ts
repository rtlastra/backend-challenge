import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChallengeModule } from './challenge/challenge.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    ChallengeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
