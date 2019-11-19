
export default class storeService {
  data = [
    {
      id: 1,
      title: 'Crash Bandicoot',
      author: 'Naughty Dog',
      price: 32,
      img: 'https://upload.wikimedia.org/wikipedia/ru/6/68/Crash_Bandicoot_front_NTSC_cover.png',
      summary: 'Crash Bandicoot is a franchise of platform video games. The series was created by Andy Gavin and Jason Rubin during their tenure at Naughty Dog for Universal Interactive Studios and Sony Computer Entertainment; the series was originally exclusive to the PlayStation family of video game consoles. The series has appeared on multiple platforms and gone through various developers and spans numerous genres.'

    },
    {
      id: 2,
      title: 'Spyro the Dragon',
      author: '	Insomniac Games',
      price: 45,
      img: 'https://upload.wikimedia.org/wikipedia/ru/7/76/250px-SpyrotheDragon.jpg',
      summary: 'Spyro the Dragon is a platform game developed by Insomniac Games and published by Sony Computer Entertainment for the PlayStation on September 10, 1998. The first game in the Spyro series, it stars the title character, a young purple dragon named Spyro, and his dragonfly friend, Sparx, who must journey across the Dragon Kingdom in order to defeat Gnasty Gnorc (pronounced nas-tee nork), who has overtaken the 5 dragon Homeworlds by trapping the other dragons in crystal and turning their hoard of gems into an army of minions for his bidding.'
    },
    {
      id: 3,
      title: 'Final Fantasy VII',
      author: 'Square Co Ltd.',
      price: 35,
      img: 'https://upload.wikimedia.org/wikipedia/ru/3/3d/Final_Fantasy_VII_NA_cover.jpg',
      summary: 'Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh main installment in the Final Fantasy series. Published in Japan by Square, it was released in other regions by Sony Computer Entertainment and became the first in the main series to see a PAL release.'
    },
    {
      id: 4,
      title: 'Tarzan',
      author: 'Disney Interactive',
      price: 40,
      img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Tarzan_PlayStation.jpg',
      summary: 'Disneys Tarzan (also known as Tarzan Action Game) is an action platformer video game developed by Eurocom and published by Sony Computer Entertainment for the PlayStation in 1999 based on the Disney animated film Tarzan. Konami published the game for its Japanese release. It was also released for PC systems in 1999 and for the Nintendo 64 in 2000. A variant of the game for the Game Boy Color was developed by Digital Eclipse and released in 1999.'
    },
    {
      id: 5,
      title: 'Resident Evil 3',
      author: 'Capcom',
      price: 42,
      img: 'https://upload.wikimedia.org/wikipedia/ru/e/ed/Resident_Evil_3_cover.jpg',
      summary: 'Resident Evil 3: Nemesis is a survival horror game developed by Capcom and released for the PlayStation in 1999. It is the third installment in the Resident Evil series and takes place around the events of Resident Evil 2. The story follows Jill Valentine and her efforts to escape from a city infected with a biological weapon. Choices through the game affect the story and ending. The game uses the same engine as its predecessors and features 3D models over pre-rendered backgrounds with fixed camera angles.'
    },
    {
      id: 6,
      title: 'Sonic CD',
      author: 'SEGA',
      price: 39,
      img: 'https://i.pinimg.com/originals/b3/dc/fe/b3dcfed303eb7277cd1a76604347be7d.jpg',
      summary: 'Sonic the Hedgehog CD, commonly referred to as Sonic CD, is a 1993 platform game for the Sega CD. The story follows Sonic the Hedgehog as he attempts to save an extraterrestrial body, Little Planet, from Doctor Robotnik. As a Sonic the Hedgehog series platformer, Sonic runs and jumps through several themed levels while collecting rings and defeating robots.'
    }
  ];

  getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve(this.data)
      }, 700)
    });
  }

}