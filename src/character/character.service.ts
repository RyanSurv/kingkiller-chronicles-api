import { Injectable, NotFoundException } from '@nestjs/common';
import { major_characters } from './major-characters';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharacterService {
  private characters: Character[] = [...major_characters];

  create(createCharacterDto: CreateCharacterDto) {
    return [
      ...this.characters,
      {
        id: this.characters.length + 1,
        ...createCharacterDto,
      },
    ];
  }

  findAll(queries: { name?: string }) {
    let characters = [...this.characters];

    if (queries.name) {
      characters = characters.filter((character) =>
        character.name.toLowerCase().includes(queries.name.toLowerCase()),
      );
    }

    return characters;
  }

  findOne(id: number) {
    return this.characters[id - 1];
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    if (!this.characters[id - 1]) {
      throw new NotFoundException();
    }
    const characters = [...this.characters];
    characters.splice(id - 1, 1);
    return characters;
  }
}
