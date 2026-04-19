// 4.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adults = ages.filter(age => age > 18);
console.log(adults);


// 4.2

const evenAges = ages.filter(age => age % 2 === 0);
console.log(evenAges);


// 4.3

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const lolStreamers = streamers.filter(
  streamer => streamer.gameMorePlayed === 'League of Legends'
);

console.log(lolStreamers);


// 4.4

const streamersWithU = streamers.filter(
  streamer => streamer.name.includes('u')
);

console.log(streamersWithU);


// 4.5

const legendsStreamers = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    const updatedGame =
      streamer.age > 35
        ? streamer.gameMorePlayed.toUpperCase()
        : streamer.gameMorePlayed;

    return {
      ...streamer,
      gameMorePlayed: updatedGame
    };
  });

console.log(legendsStreamers);