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
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ApiCreatedResponse({
    type: Location,
    isArray: true,
    status: 201,
    description: 'Character list with newly created character',
  })
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  @ApiOkResponse({
    type: Location,
    isArray: true,
    status: 200,
    description: 'Returns all locations',
  })
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
  })
  findAll(@Query('name') name: string) {
    return this.locationService.findAll({ name });
  }

  @Get(':id')
  @ApiOkResponse({
    type: Location,
    status: 200,
    description: 'Returns a location with given ID',
  })
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: Location,
    isArray: true,
    status: 200,
    description: 'Location list with specified location removed',
  })
  @ApiNotFoundResponse({
    type: NotFoundException,
    status: 404,
    description: 'No location with given ID found',
  })
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
