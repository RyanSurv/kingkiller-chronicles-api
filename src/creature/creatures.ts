import { Creature } from './entities/creature.entity';

export const creatures: Creature[] = [
  {
    id: 1,
    name: 'Angel',
    alternative_names: [],
    description:
      'Entities referred to as angels are mentioned at various points in the folklore and mythology of the Kingkiller cultures. People have been quoted as exclaiming "Tehlu and his angels" in surprise or exasperation, and they are implied to exist throughout the Tehlin religious text The Book of the Path. Not much is known about the specifics of what angels are or how they behave, but entities described by Skarpi in a tale that, ironically, had him arrested for heresy, seem similar to what many people would recognize as angels.',
    sentience: undefined,
    mortality: undefined,
    status: undefined,
  },
  {
    id: 2,
    name: 'Demon',
    alternative_names: [],
    description:
      'Demons are rather hard to define in the world of the Kingkiller Chronicle, but in the broadest terms they seem to be a catch-all category for any non-human creature for which the average Tehlin follower has no frame of reference. This most often appears to be one or another type of fae, but can also be an unintelligent beast of some kind that possesses strange abilities or appearance, such as the draccus.',
    sentience: 'Sentient',
    mortality: 'Mortal',
    status: undefined,
  },
  {
    id: 3,
    name: 'Draccus',
    alternative_names: ['Dragon'],
    description:
      "The draccus' diet consists mainly of trees, and as such they live in densely forested areas. However, they are by no means confined to one area. They regularly roam within the general vicinity of where they live in. Their ability to breathe fire, combined with their choice of habitat, would, as one may imagine, result in some difficulties; however the Common Draccus has a natural penchant to put out fires by dousing them with its enormous body. The scales of the beast contain a vast amount of iron, believed to be due to the rocks the Draccus consumes to help digest the trees it feeds on. The Common Draccus is best detailed in The Mating Habits of the Common Draccus, by Devan Lochees.",
    sentience: 'Sentient',
    mortality: 'Mortal',
    status: 'Mostly Extinct',
  },
  {
    id: 4,
    name: 'Keth-Selhan',
    alternative_names: ['One Sock', 'Khershaen breed'],
    description:
      'Keth- Selhan is a full blooded Khershaen breed horse who is atleast eighteen hands tall with a proud head and black body.His left hind foot has a white sock which is dyed to appear as black. He is a gorgeous, young and strong animal with a legendary endurance and smooth gait who hardly sweats even after galloping a full mile. He is said to shy a bit on the right side and is trained by close reins.',
    sentience: 'Animal being',
    mortality: 'Mortal',
    status: undefined,
  },
  {
    id: 5,
    name: 'Scrael',
    alternative_names: [],
    description:
      "Scrael are black as slate and spider-shaped, about the size of a wagon wheel. Their feet are razor-sharp and they have no obvious eyes or mouth. The body of a scraeling is hard and smooth and feels like pottery. The tensile strength of its limbs can be compared to stone. It is also asserted that it has no blood or organs, appearing grey on the inside like a mushroom. Scrael are known to always travel in packs of at least three. They are dangerous adversaries who attack living beings and cut them up with their feet. Fighting a scraeling with a sword is useless. However, they do exhibit some weaknesses. Specifically, they are susceptible to iron and fire. Pressing an iron piece to the body of a dead scraeling will cause a sharp crackling sound and an acrid smell of rotting flowers and burning hair. Keeping a piece of a scraeling's body would draw other scrael to your location. In order to destroy any traces of a scraeling completely, the body must be burned with rowan wood in a fire in a deep pit. The scrael hail from a place far east of Newarre and they have to cross the Stormwal Mountains to enter the civilized world. It is suggested that some might have died coming over the mountains.",
    sentience: 'Non-sentient',
    mortality: 'Mortal',
    status: 'Extant',
  },
  {
    id: 6,
    name: 'Sipquick',
    alternative_names: [],
    description:
      'Sipquicks, or flits, are small, pretty nectar-feeding birds. The Eld Vintic term for a sipquick is "calanthis", which is also the surname of the royal family in Vintas. They are known for flitting from place to place.',
    sentience: undefined,
    mortality: undefined,
    status: undefined,
  },
  {
    id: 7,
    name: 'Skin Dancer',
    alternative_names: ['Mahael-uret'],
    description:
      'A skin dancer, known in Fae language as Mahael-uret, is a Fae creature that can possess and control the bodies of living organisms',
    sentience: 'Semi-sentient',
    mortality: 'Mortal',
    status: 'Extinct (presumed)',
  },
];
