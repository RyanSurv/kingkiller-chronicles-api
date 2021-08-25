import { Injectable, NotFoundException } from '@nestjs/common';
import { creatures } from './creatures';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { Creature } from './entities/creature.entity';

@Injectable()
export class CreatureService {
  private creatures: Creature[] = [...creatures];

  create(createCreatureDto: CreateCreatureDto) {
    return [
      ...this.creatures,
      {
        id: this.creatures.length,
        ...createCreatureDto,
      },
    ];
  }

  findAll(queries: { name?: string }) {
    let creatures = [...this.creatures];

    if (queries.name) {
      creatures = creatures.filter((creature) =>
        creature.name.toLowerCase().includes(queries.name.toLowerCase()),
      );
    }

    return creatures;
  }

  findOne(id: number) {
    return this.creatures[id - 1];
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return `This action updates a #${id} creature`;
  }

  remove(id: number) {
    if (!this.creatures[id - 1]) {
      throw new NotFoundException();
    }
    const creatures = [...this.creatures];
    creatures.splice(id - 1, 1);
    return creatures;
  }
}
