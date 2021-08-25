import { Group } from './entities/group.entity';

export const groups: Group[] = [
  {
    id: 1,
    name: 'The Chandrian',
    description:
      'The Chandrian are a group of seven beings known in myth and folklore throughout Temerant. They are alternatively known as the Seven, the Rhinta, and the Nameless. Not much is definitively known about the Chandrian, except that they are almost universally seen as a force of great evil. According to most accounts, there are seven in total. In Ademic legend they are named Cyphus, Stercus, Ferule, Usnea, Dalcenti, Alenta, and Alaxel. Some, if not all of the Chandrian also go by other names as well. Ferule is commonly referred to as Cinder, and Alaxel is more widely known by the name Haliax. Each of the Chandrian is believed to have a specific sign associated with them, through which one can tell if they are near. One of the most well-known of these is blue flame, which is often seen burning in the wake of their attacks. To most of the Four Corners of Civilization, the Chandrian are a myth, more so than perhaps any other beings or creatures of legend. Nevertheless, speaking the name of any member of the Chandrian is strictly taboo, as there is a (perhaps not unfounded) superstition that speaking their name will cause them to appear.',
    alternative_names: [],
    notable_members: [
      'Alaxel/Haliax',
      'Cyphus',
      'Stercus',
      'Ferule/Cinder',
      'Usnea',
      'Dalcenti',
      'Alenta',
    ],
    purpose: 'Destroy knowledge about the group itself',
    status: 'Active',
  },
  {
    id: 2,
    name: 'The Amyr',
    description:
      'The Amyr is a mysterious group known by most as church knights during the Aturan Empire. The Holy Order of the Amyr is believed to be founded by the Tehlin Church in the early days of the Aturan Empire. Their credo was "Ivare Enim Euge", which roughly translates as "For the Greater Good". The members were equal part knight-errant and vigilante. They had judiciary powers in both the religious and secular courts. All of them, to varying degrees, were exempt from the iron law.',
    alternative_names: ['The Holy Order of Amyr', 'Ciridae'],
    notable_members: ['Sir Savien Traliard', 'Atreyon'],
    purpose: 'Protection of the Aturan Empire',
    status: 'Disbanded',
  },
  {
    id: 3,
    name: 'Edema Ruh',
    description:
      'The Edema Ruh are a nomadic cultural group known throughout the Four Corners of Civilization. Having no country to call their own, the Edema Ruh are travelers and entertainers with talents ranging far and wide, but most commonly involving storytelling, acting, and music. They travel in large groups known as troupes, roaming the country in wagon trains. They generally trade entertainment for food and coin. Some Ruh troupes have a wealthy patron who allows them to use his name and colors, and to travel freely under his protection. In exchange, the patron expects them to perform in his court for part of the year, and to conduct themselves in a manner that will reflect well upon his reputation. This is a mutually beneficial arrangement, as the patron gains notoriety as a tasteful and artistic individual, while the troupe gains financial support and the patron\'s influence to help overcome suspicion wherever they travel. The common folk mistrust and reproach the Edema Ruh, who consequently developed many traditions to establish a tight-knit community. All troupes are bound under the maxim, "One Family". Other practices include the offering of wine upon greeting and branding betrayers of the fold. When this occurs a broken circle is burned into the offender\'s body, indicating that the person is no longer a part of the circle that is the one Edema Ruh Family.',
    alternative_names: ['Ruh'],
    notable_members: ['Illien', 'Kvothe Arliden'],
    purpose: undefined,
    status: undefined,
  },
  {
    id: 4,
    name: 'The Sithe',
    description:
      'The Sithe is a faction of the Fae court. The members of the Sithe are said to wear crowns woven of holly boughs, silver armor and robes when they ride into battle and carry long horn bows as weapons.',
    alternative_names: ['The White Riders'],
    notable_members: [],
    purpose: 'Gaurd the Cthaeh',
    status: 'Active',
  },
  {
    id: 5,
    name: "Lord Greyfallow's Men",
    description:
      "Lord Greyfallow's Men was a traveling troupe, consisting primarily of Edema Ruh. The troupe was patroned by Baron Greyfallow, and led by Arliden.",
    alternative_names: [],
    notable_members: [
      'Arliden',
      'Laurian',
      'Kvothe',
      'Abenthy',
      'Teren',
      'Trip',
      'Shandi',
      'Marion',
      'Laclith',
      'Hetera',
    ],
    purpose: 'Traveling troupe of court performers',
    status: 'Murdered by the Chandrian',
  },
  {
    id: 6,
    name: 'House Lackless',
    description:
      'The Lackless family is one of the oldest and most respected family in Vintas, able to trace their lineage back further than a millennium. Were it not for the burning of Caluptena, it is suspected that records could be found that would place their lineage as one of the oldest known.',
    alternative_names: ['Loeclos', 'Loklos', 'Loeloes', 'Lockless'],
    notable_members: [
      'Aculeus Lackless',
      'Meluan Lackless',
      'Netalia Lackless',
    ],
    purpose: undefined,
    status: 'Extant',
  },
];
