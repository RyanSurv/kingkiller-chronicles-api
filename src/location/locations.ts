import { Location } from './entities/location.entity';

export const locations: Location[] = [
  {
    id: 1,
    name: 'Temerant',
    description:
      'Temerant is the world where the events of The Kingkiller Chronicle take place.',
    location: undefined,
    position: 'World',
  },
  {
    id: 2,
    name: 'The Four Corners of Civilization',
    description:
      'The Four Corners of Civilization are just what they sound like, the four major countries of Temerant: The Commonwealth, Ceald, Modeg, and Vintas. They each occupy a corner. The Commonwealth controls the Southwest corner, with Ceald in the Northwest, Modeg in the Northeast, and Vintas in the South East.',
    location: 'Temerant',
    position: 'Geographic Region',
  },
  {
    id: 3,
    name: 'The Fae',
    description:
      'The Fae is an alternate world where non-human creatures, commonly referred to as faeries, although they consider this pejorative, originate.',
    location: undefined,
    position: undefined,
  },
  {
    id: 4,
    name: 'Ademre',
    description:
      'Ademre is a nation in Temerant. It is not part of The Four Corners of Civilization. Ademre is well known for producing the powerful, capable and talented fighters known as Adem mercenaries, or Cethan. It has many schools which teach different "paths" or styles of fighting. Those who are trained, and who successfully demonstrate their prowess through tests and challenges, are allowed to "take the Red" or begin wearing the bright red tight-fitting clothing that distinguishes Adem mercenaries from others. They then are usually sent out to work as highly paid body guards and warriors for hire, sending funds back to the barren homeland which is then used to support their schools and their families.',
    location: 'Northeastern part of Temerant',
    position: 'Free State',
  },
  {
    id: 5,
    name: 'Vintas',
    description:
      'Vintas is a country in the eastern part of the Four Corners of Civilization. It is bordered by the Stormwal Mountains to the east, Modeg to the north, and the Small Kingdoms to the west. Though once part of the Aturan Empire, Vintas has been ruled for centuries by the Calanthis family. The current king, Roderic Calanthis, rules from the capital city of Renere. Other major cities include Severen, which is ruled by the Maer Alveron, and the Free City of Tinuë. Vintas also contains portions of the Eld. Vintish people tend to be superstitious, especially about the Fae and Draugar. They view the arcane arts with great suspicion.',
    location: 'Eastern part of the Four Corners of Civilization',
    position: 'Sovereign state',
  },
  {
    id: 6,
    name: 'Tarbean',
    description:
      'Located on The Reft, Tarbean is a fishing city that has grown into a thriving metropolitan center. It is so large many say it is impossible to walk from one end of the city to the other in a single day. More like many cities cobbled into one, it is organized into innumerable districts: Downings, Drover Court, the Wash, Middletown, Tallows, Tunning, Dockside, the Tarway, Seamline Lane, etc. For the most part, however, Tarbean is divided into two districts: Waterside and Hillside. Waterside is closest to the sea, and as such is comprised of the docks, lowly taverns, cheap shops, and low wealth residential. It is filled with beggars, thieves, criminals, and most other imaginable types who one would dread coming upon in a dark ally. This is where Kvothe spends his three years after his family is killed. Hillside is far away from the crude types that make their living from the sea, and is filled with banks, expensive shops, and immense manor houses. Noblemen and women live in Hillside, and patrolling guards make sure that it stays that way. Beggars are not tolerated, thieves are nigh on nonexistent, and shop owners fear to barter with their customers, lest they are important.  Kvothe makes his way to this side of Tarbean to beg, and earns one whole silver penny from a young woman..  He is then confronted by a guard, beaten in an alley, and left for dead in a snowbank.  As he begins to regain consciousness, he sees two demons standing infront of him, one seemingly called Holly.  The other one is Encanis, the Lord of Demons.  He wants to take Kvothe with him, but cannot as they are being pursued by a horde of people.',
    location: 'Southern Commonwealth',
    position: 'Fishing port, commercial hub',
  },
  {
    id: 7,
    name: 'The University',
    description:
      'The University is a place of higher learning, specializing in many different fields of study. The University is situated approximately two miles west of Imre, separated from the city by the Omethi River which can be crossed by the Stonebridge. The University is comprised of fifteen different buildings which house the disciplines taught within. It is surrounded by a small town that caters to the needs of the students. The University is a well-respected institution throughout the Four Corners, and the only place where one may earn a guilder and be recognized as a true arcanist. The University stands out due to its instruction in disciplines that closely resemble magic, replacing technological development with Sympathy, Artificery, Alchemy and Naming. When Kvothe attended the University, it contained somewhere under 1500 students, who generally came from wealthy families.',
    location: 'Commonwealth',
    position: 'Educational Institution',
  },
  {
    id: 8,
    name: 'Waystone Inn',
    description:
      "The Waystone Inn is an inn in the town of Newarre. It is stocked with a wider variety of potables - coffee and chocolate - than might be expected for such a remote village, and experiences a loyal following of regulars from the townsfolk. It was purchased or built by the current owner Kote, who runs the inn with the help of his apprentice, Bast. The inn has a large main room, filled with tables and containing the bar. There is a great stone fireplace in this room. The inn also has a cellar where various things, apples, meat and such, are kept cold. There are rooms upstairs for the inn's guests along with Kote and Bast's own rooms. Outside the inn has stables for the horses of merchants who sporadically come through to Newarre.",
    location: 'Newarre',
    position: 'Inn',
  },
  {
    id: 9,
    name: 'The Eolian',
    description:
      "The Eolian is a popular musical venue and bar run by Deoch and Stanchion. It is best known for the esteemed group of musicians who play there in hopes of earning a highly coveted set of silver talent pipes, and the possibility of gaining a noble Patron. The Eolian charges an entrance fee of one jot for audience members and pipe-less performers alike, to ensure quality patronage. Musicians wishing to play on the Eolian's stage must pay an additional silver talent. Musicians with pipes and their guests may enter free of charge and perform without question.",
    location: 'Imre',
    position: 'Bar and Entertainment Venue',
  },
  {
    id: 10,
    name: 'Imre',
    description:
      'Imre is a city in the Commonwealth, close to the University. It is home to a wide variety of artists and wealthy nobility.',
    location: 'Cental Commenwealth',
    position: 'City',
  },
  {
    id: 11,
    name: 'The Archives',
    description:
      'The Archives is a vast repository of books used as the primary reference point for students who are enrolled at The University. It is housed in a great stone building larger than four graneries stacked together. It has no windows and only a single set of large doors, also made of stone. The words "Vorfelan Rhinata Morie" are etched above these. The Archives are currently presided over by Master Lorren, the Master Archivist, and worked by several students referred to as scrivs.',
    location: 'The University',
    position: 'Academic building',
  },
  {
    id: 12,
    name: 'Severen',
    description:
      'Severen is the city in Vintas where Kvothe is sent by Count Threpe to enter the service of the Maer Alveron. Severen is divided into two chief sections: Severen-High and Severen-Low.',
    location: 'Vintas',
    position: 'City',
  },
  {
    id: 13,
    name: 'Newarre',
    description:
      "The town is characterized as a small farming community. It has a mayor, a family of shepherds, several farms, a bakery, a church, a miller, a blacksmith, and a carpenter, as well as The Waystone Inn. Whether or not other local businesses exist is unknown. Like Imre, there is an Old Stone Bridge which acts as a local landmark. In The Lightning Tree, it is revealed that a set of fallen Waystones are also present. It is near the small towns of Abbott's Ford and Rannish.",
    location: undefined,
    position: 'Town',
  },
];
