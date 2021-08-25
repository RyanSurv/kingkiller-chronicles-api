import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { Group } from './entities/group.entity';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @ApiCreatedResponse({
    type: Group,
    isArray: true,
    status: 201,
    description: 'Character list with newly created character',
  })
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  @ApiOkResponse({
    type: Group,
    isArray: true,
    status: 200,
    description: 'Returns all groups',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
  })
  findAll(@Query('name') name: string) {
    return this.groupService.findAll({ name });
  }

  @Get(':id')
  @ApiOkResponse({
    type: Group,
    status: 200,
    description: 'Returns a group with given ID',
  })
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: Group,
    isArray: true,
    status: 200,
    description: 'Group list with specified group removed',
  })
  @ApiNotFoundResponse({
    type: NotFoundException,
    status: 404,
    description: 'No group with given ID found',
  })
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}
