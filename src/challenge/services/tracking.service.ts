import { Injectable } from '@nestjs/common';

import TrackingByGuideInterface from '../interfaces/tracking-by-guide.interface';
import TrackingByTagInterface from '../interfaces/tracking-by-tag.interface';
import { HttpCoordinadoraRequestService } from './http-coordinadora-request.service';
@Injectable()
export default class TrackingService {
  constructor(
    private readonly httpCoordinadoraRequestService: HttpCoordinadoraRequestService
  ) { }

  async getTrackingInformation(id: string): Promise<TrackingByGuideInterface | TrackingByTagInterface> {
    const trackingByGuide = await this.getTrackingByGuide(id);
    if (trackingByGuide) return trackingByGuide;
    const trackingByTag = await this.getTrackingByTag(id);
    if (trackingByTag) return trackingByTag;
    throw new Error('Número de guía o etiqueta invalida');
  }

  private async getTrackingByGuide(code: string): Promise<TrackingByGuideInterface> {
    const resultByGuide = await this.httpCoordinadoraRequestService.getInformation(true);
    const guide = resultByGuide.guias.filter(guia => guia.codigo_remision === code);
    if (guide.length === 0) return null;
    let units = [];
    const filterGuide = guide[0];
    if (filterGuide.unidades.length > 0) {
      const resultByTag = await this.httpCoordinadoraRequestService.getInformation(false);
      units = filterGuide.unidades.map(unit => {
        const filterData = resultByTag.reduce((a, b) => {
          return b.etiqueta1d === unit.etiqueta1d
            ? [...a, { checkpoint: b.checkpoint, tipo: b.tipo }]
            : a
        }, []);
        return {
          etiqueta1d: unit.etiqueta1d,
          cantidad_checkpoints: filterData.length,
          tracking: filterData
        }
      });
    }
    return {
      codigo_remision: filterGuide.codigo_remision,
      nombre_destinatario: filterGuide.nombre_destinatario,
      dir_destinatario: filterGuide.dir_destinatario,
      unidades: units
    }
  }

  private async getTrackingByTag(code: string): Promise<TrackingByTagInterface> {
    const resultByTag = await this.httpCoordinadoraRequestService.getInformation(false);
    const tag = resultByTag.reduce((a, b) => {
      return b.etiqueta1d === code
        ? [...a, { checkpoint: b.checkpoint, tipo: b.tipo }]
        : a
    }, []);
    if (tag.length === 0) return null;
    const resultByGuide = await this.httpCoordinadoraRequestService.getInformation(true);
    const guide = resultByGuide.guias.filter(guide => {
      const units = guide.unidades.filter(unit => unit.etiqueta1d === code);
      return units.length > 0;
    });
    return {
      etiqueta: code,
      informacion_guia: {
        codigo_remision: guide[0].codigo_remision,
        nombre_destinatario: guide[0].nombre_destinatario,
        dir_destinatario: guide[0].dir_destinatario,
      },
      cantidad_checkpoints: tag.length,
      tracking: tag
    }
  }
}