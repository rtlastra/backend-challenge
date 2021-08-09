import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class ArrayScoreDto {
  @IsNotEmpty({ message: 'Valor incorrecto' })
  @ApiProperty({ type: [Number], description: 'numbers' })
  numbers: number[][];
}