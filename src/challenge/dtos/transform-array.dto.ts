import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class TransformArrayDto {
  @IsNotEmpty({ message: 'Valor incorrecto' })
  @ApiProperty({ type: [String], description: 'numbers' })
  data: string[][];

  @IsNotEmpty({ message: 'Valor incorrecto' })
  @ApiProperty({ type: String, description: 'order' })
  order: string;
}