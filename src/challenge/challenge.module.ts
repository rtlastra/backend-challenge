import { Module } from '@nestjs/common';
import { ChallengeController } from './challenge.controller';
import ChallengeService from './services/challenge.service';
import { HttpCoordinadoraRequestService } from './services/http-coordinadora-request.service';
import TrackingService from './services/tracking.service';

@Module({
  imports: [],
  controllers: [ChallengeController],
  providers: [
    ChallengeService,
    TrackingService,
    HttpCoordinadoraRequestService
  ],
})
export class ChallengeModule { }
