import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
  ApiResponseProperty,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  @ApiCreatedResponse({
    type: Character,
    isArray: true,
    status: 201,
    description: 'Character list with newly created character',
  })
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  @Get()
  @ApiOkResponse({
    type: Character,
    isArray: true,
    status: 200,
    description: 'Returns all characters',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
  })
  findAll(@Query('name') name: string) {
    return this.characterService.findAll({ name });
  }

  @Get(':id')
  @ApiOkResponse({
    type: Character,
    status: 200,
    description: 'Returns a character with given ID',
  })
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: Character,
    isArray: true,
    status: 200,
    description: 'Character list with specified character removed',
  })
  @ApiNotFoundResponse({
    type: NotFoundException,
    status: 404,
    description: 'No character with given ID found',
  })
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }
}
