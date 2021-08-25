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
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { CreatureService } from './creature.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { Creature } from './entities/creature.entity';

@Controller('creature')
export class CreatureController {
  constructor(private readonly creatureService: CreatureService) {}

  @Post()
  @ApiCreatedResponse({
    type: Creature,
    isArray: true,
    status: 201,
    description: 'Creature list with newly created creature',
  })
  create(@Body() createCreatureDto: CreateCreatureDto) {
    return this.creatureService.create(createCreatureDto);
  }

  @Get()
  @ApiOkResponse({
    type: Creature,
    isArray: true,
    status: 200,
    description: 'Returns all creatures',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
  })
  findAll(@Query('name') name: string) {
    return this.creatureService.findAll({ name });
  }

  @Get(':id')
  @ApiOkResponse({
    type: Creature,
    status: 200,
    description: 'Returns a creature with given ID',
  })
  findOne(@Param('id') id: string) {
    return this.creatureService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCreatureDto: UpdateCreatureDto,
  ) {
    return this.creatureService.update(+id, updateCreatureDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: Creature,
    isArray: true,
    status: 200,
    description: 'Creature list with specified creature removed',
  })
  @ApiNotFoundResponse({
    type: NotFoundException,
    status: 404,
    description: 'No creature with given ID found',
  })
  remove(@Param('id') id: string) {
    return this.creatureService.remove(+id);
  }
}
