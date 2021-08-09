import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import {
  ApiCreatedResponse,
  ApiBody,
  ApiBadRequestResponse
} from '@nestjs/swagger';

import ArrayScoreDto from './dtos/array-score.dto';
import BidimensionalArrayDto from './dtos/bidimensional-array.dto';
import MyCowsDto from './dtos/my-cows.dto';
import NumericArrayDto from './dtos/numeric-array.dto';
import GetStringManipulation from './dtos/string-manipulation.dto';
import TransformArrayDto from './dtos/transform-array.dto';

import { ResponseStatus } from './enums/response-status.enum';
import { TransformArrayOderEnum } from './enums/transform-array-order.enum';
import { ApiException } from './exeptions/api.exception';
import { JsonResponse } from './interfaces/json-response.interface';

import ChallengeService from './services/challenge.service';
import TrackingService from './services/tracking.service';

@Controller('challenge')
export class ChallengeController {
  constructor(
    private readonly challengeService: ChallengeService,
    private readonly trackingService: TrackingService
  ) { }

  @Post('average')
  @ApiCreatedResponse({ description: 'Calculate average' })
  @ApiBadRequestResponse({ description: 'Invalid Payload' })
  @ApiBody({ type: NumericArrayDto })
  average(@Body() params: NumericArrayDto): JsonResponse {
    return {
      status: ResponseStatus.Success,
      data: {
        average: this.challengeService.average(params.numbers)
      }
    }
  }

  @Post('stringManipulation')
  @ApiCreatedResponse({ description: 'New string without last exclamation mark' })
  @ApiBadRequestResponse({ description: 'Invalid Payload' })
  @ApiBody({ type: GetStringManipulation })
  stringManipulation(@Body() param: GetStringManipulation): JsonResponse {
    return {
      status: ResponseStatus.Success,
      data: {
        string: this.challengeService.stringWithoutLastExclamationMark(param.string)
      }
    }
  }

  @Post('sumArray')
  @ApiCreatedResponse({ description: 'Result SumArray exercise' })
  @ApiBadRequestResponse({ description: 'Invalid Payload' })
  @ApiBody({ type: BidimensionalArrayDto })
  sumArray(@Body() param: BidimensionalArrayDto): JsonResponse {
    return {
      status: ResponseStatus.Success,
      data: this.challengeService.sumArray(param.numbers)
    }
  }

  @Post('transformArray')
  @ApiCreatedResponse({ description: 'Result transformArray exercise' })
  @ApiBadRequestResponse({ description: 'Invalid Payload' })
  @ApiBody({ type: TransformArrayDto })
  transformArray(@Body() param: TransformArrayDto): JsonResponse {
    const order = param.order === 'ASC'
      ? TransformArrayOderEnum.ASC
      : TransformArrayOderEnum.DESC;
    return {
      status: ResponseStatus.Success,
      data: {
        array: this.challengeService.transformArray(param.data, order)
      }
    }
  }

  @Post('myCows')
  @ApiCreatedResponse({ description: 'Result myCows exercise' })
  @ApiBadRequestResponse({ description: 'Invalid Payload' })
  @ApiBody({ type: MyCowsDto })
  myCows(@Body() param: MyCowsDto): JsonResponse {
    const n = param.productions[0].length;
    param.productions.map(p => {
      if (p.length < 3 || p.length > 50 || p.length != n) throw new ApiException({ base: 'n invalido ' })
      p.map(liters => {
        if (liters < 0 || liters > 11.9) throw new ApiException({ base: 'número de litros invalido ' })
      });
    });
    return {
      status: ResponseStatus.Success,
      data: this.challengeService.myCows(param.productions)
    }
  }

  @Get('tracking/:id')
  @ApiCreatedResponse({ description: 'Result tracking exercise' })
  @ApiBadRequestResponse({ description: 'Invalid Payload' })
  async tracking(@Param('id') id: string): Promise<JsonResponse> {
    try {
      return {
        status: ResponseStatus.Success,
        data: await this.trackingService.getTrackingInformation(id)
      }
    } catch (e) {
      throw new ApiException({ base: e.message })
    }
  }

  @Post('arrayScore')
  @ApiCreatedResponse({ description: 'Result arrayScore exercise' })
  @ApiBadRequestResponse({ description: 'Invalid Payload' })
  @ApiBody({ type: ArrayScoreDto })
  arrayScore(@Body() param: ArrayScoreDto): JsonResponse {
    return {
      status: ResponseStatus.Success,
      data: {
        score: this.challengeService.arrayScore(param.numbers)
      }
    }
  }
}