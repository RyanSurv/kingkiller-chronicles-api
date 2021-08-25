export class CreateGroupDto {
  name: string;
  description: string;
  alternative_names: string[];
  notable_members: string[];
  purpose: string;
  status: string;
}
