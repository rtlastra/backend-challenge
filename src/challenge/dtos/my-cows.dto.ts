import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class MyCowsDto {
  @IsNotEmpty({ message: 'Valor incorrecto' })
  @ApiProperty({ type: [Number], description: 'productions' })
  productions: number[][];
}