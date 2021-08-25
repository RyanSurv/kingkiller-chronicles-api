import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  name: string;
  description: string;
  alternative_names: string[];
  notable_members: string[];
  purpose: string;
  status: string;
}
