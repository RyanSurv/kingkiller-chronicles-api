import { ApiProperty } from '@nestjs/swagger';

export class Character {
  @ApiProperty({
    description: 'The unique ID of the character',
  })
  id: number;

  @ApiProperty({
    description: 'The name of the character',
  })
  name: string;

  @ApiProperty({
    description: 'The age of the character',
    required: false,
  })
  age: string;

  @ApiProperty({
    description: 'The description of the character',
  })
  description: string;

  @ApiProperty({
    description: 'The hair style/color of the character',
    required: false,
  })
  hair?: string;

  @ApiProperty({
    description: 'The eye color of the character',
    required: false,
  })
  eye_color: string;

  @ApiProperty({
    description: 'The species of the character',
    required: false,
  })
  species: string;

  @ApiProperty({
    description: 'The gender of the character',
    required: false,
  })
  gender: string;

  @ApiProperty({
    description: 'The ethnicity of the character',
    required: false,
  })
  ethnicity: string;

  @ApiProperty({
    description: 'The occupations of the character',
    required: false,
    type: [String],
  })
  occupations: string[];

  @ApiProperty({
    description: 'The arcanum rank of the character',
    required: false,
  })
  arcanum_rank: string;
}
