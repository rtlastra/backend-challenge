import { BadRequestException } from '@nestjs/common';
import { ResponseStatus } from '../enums/response-status.enum';
import { ApiError } from '../interfaces/api-error.interface';

export class ApiException extends BadRequestException {
  constructor(errors?: ApiError) {
    super({
      status: ResponseStatus.Error,
      errors,
    });
  }
}
