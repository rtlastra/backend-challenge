import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class HttpCoordinadoraRequestService {
  urlGuide: string;
  urlTracking: string;

  constructor(private readonly configService: ConfigService) {
    this.urlGuide = this.configService.get('urlGuide') as string;
    this.urlTracking = this.configService.get('urlTracking') as string;
  }

  async getInformation(isGuide: boolean): Promise<any> {
    try {
      const headers = {
        'Content-Type': 'application/json'
      }
      const url = isGuide ? this.urlGuide : this.urlTracking;
      const response = await axios.get(url, { headers });
      const responseBody = response.data.data;
      return responseBody;
    } catch (error) {
      throw new Error(`Coordinadora Api Error: ${error}`);
    }
  }
}