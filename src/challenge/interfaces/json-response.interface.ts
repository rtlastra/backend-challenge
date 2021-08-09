import { ResponseStatus } from '../enums/response-status.enum';

export interface JsonResponse {
  status: ResponseStatus;
  data: {
    [key: string]: any;
  };
}
