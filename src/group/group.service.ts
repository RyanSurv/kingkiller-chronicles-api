import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { groups } from './groups';

@Injectable()
export class GroupService {
  private groups: Group[] = [...groups];

  create(createGroupDto: CreateGroupDto) {
    return [
      ...this.groups,
      {
        id: this.groups.length + 1,
        ...createGroupDto,
      },
    ];
  }

  findAll(queries: { name?: string }) {
    let groups = [...this.groups];

    if (queries.name) {
      groups = groups.filter((group) =>
        group.name.toLowerCase().includes(queries.name.toLowerCase()),
      );
    }

    return groups;
  }

  findOne(id: number) {
    return this.groups[id - 1];
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    if (!this.groups[id - 1]) {
      throw new NotFoundException();
    }
    const groups = [...this.groups];
    groups.splice(id - 1, 1);
    return groups;
  }
}
