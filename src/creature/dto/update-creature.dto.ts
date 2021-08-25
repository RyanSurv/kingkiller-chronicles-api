import { PartialType } from '@nestjs/mapped-types';
import { CreateCreatureDto } from './create-creature.dto';

export class UpdateCreatureDto extends PartialType(CreateCreatureDto) {
  name: string;
  alternative_names: string[];
  description: string;
  sentience: string;
  mortality: string;
  status: string;
}
