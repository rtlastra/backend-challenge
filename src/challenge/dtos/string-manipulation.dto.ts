import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class GetStringManipulation {
  @IsNotEmpty({ message: 'string no valido' })
  @IsString()
  @ApiProperty({ type: String, description: 'string' })
  string: string;
}