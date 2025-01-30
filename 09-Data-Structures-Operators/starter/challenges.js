'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const scorers = {};

for (const player of game.scored) {
  if (scorers[player]) {
    scorers[player] += 1;
  } else {
    scorers[player] = 1;
  }
}

console.log(scorers);

console.log(`Odds of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odds of draw: ${game.odds.x}`);
console.log(`Odds of victory ${game.team2}: ${game.odds.team2}`);

for (const [goal, player] of Object.entries(game.scored)) {
  console.log(`Goal${+goal + 1}: ${player}`);
}

let sum = 0;

for (const odd of Object.values(game.odds)) {
  sum += odd;
}
console.log(`The average odds is: ${sum / 3}`);

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = game.players[0];
// const allPlayers = [...game.players[0], ...game.players[1]];

// const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//   }
//   console.log(`Number of goals scored in total: ${names.length}`);
// };

// printGoals(...game.scored);

// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log();
