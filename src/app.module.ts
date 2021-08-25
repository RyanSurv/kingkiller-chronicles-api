import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { CreatureModule } from './creature/creature.module';
import { LocationModule } from './location/location.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [CharacterModule, CreatureModule, LocationModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
