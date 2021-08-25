import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';
import { locations } from './locations';

@Injectable()
export class LocationService {
  private locations: Location[] = [...locations];

  create(createLocationDto: CreateLocationDto) {
    return [
      ...this.locations,
      {
        id: this.locations.length + 1,
        ...createLocationDto,
      },
    ];
  }

  findAll(queries: { name?: string }) {
    let locations = [...this.locations];

    if (queries.name) {
      locations = locations.filter((location) =>
        location.name.toLowerCase().includes(queries.name.toLowerCase()),
      );
    }

    return locations;
  }

  findOne(id: number) {
    return this.locations[id - 1];
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    if (!this.locations[id - 1]) {
      throw new NotFoundException();
    }
    const locations = [...this.locations];
    locations.splice(id - 1, 1);
    return locations;
  }
}
