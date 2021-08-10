export default interface TrackingByTagInterface {
  etiqueta: string;
  informacion_guia: {
    codigo_remision: string;
    nombre_destinatario: string;
    dir_destinatario: string;
  },
  cantidad_checkpoints: Number;
  tracking: any;
}
