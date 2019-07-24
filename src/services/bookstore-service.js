
export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Crash Bandicoot',
      author: 'Naughty Dog',
      price: 32,
      coverImage: 'https://upload.wikimedia.org/wikipedia/ru/6/68/Crash_Bandicoot_front_NTSC_cover.png'
    },
    {
      id: 2,
      title: 'Spyro the Dragon',
      author: '	Insomniac Games',
      price: 45,
      coverImage: 'https://upload.wikimedia.org/wikipedia/ru/7/76/250px-SpyrotheDragon.jpg'
    },
    {
      id: 3,
      title: 'Final Fantasy VII',
      author: 'Square Co Ltd.',
      price: 35,
      coverImage: 'https://upload.wikimedia.org/wikipedia/ru/3/3d/Final_Fantasy_VII_NA_cover.jpg'
    },
    {
      id: 4,
      title: 'Tarzan',
      author: 'Disney Interactive',
      price: 40,
      coverImage: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Tarzan_PlayStation.jpg'
    },
    {
      id: 5,
      title: 'Resident Evil 3',
      author: 'Capcom',
      price: 42,
      coverImage: 'https://upload.wikimedia.org/wikipedia/ru/e/ed/Resident_Evil_3_cover.jpg'
    },
    {
      id: 6,
      title: 'Sonic CD',
      author: 'SEGA',
      price: 39,
      coverImage: 'https://i.pinimg.com/originals/b3/dc/fe/b3dcfed303eb7277cd1a76604347be7d.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve(this.data)
      }, 700)
    });
  }

}