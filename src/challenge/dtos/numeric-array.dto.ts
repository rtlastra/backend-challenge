import { IsNotEmpty, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class NumericArrayDto {
  @IsNotEmpty({ message: 'Valor incorrecto' })
  @IsArray()
  @ApiProperty({type: [Number], description: 'numbers'})
  numbers: number[];
}