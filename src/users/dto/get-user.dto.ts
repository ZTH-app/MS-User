import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty({
    description:
      "L'age est calculé à partir de la date de naissance stockée en base de donnée",
  })
  age: number;
  @ApiProperty()
  mail: string;
}
