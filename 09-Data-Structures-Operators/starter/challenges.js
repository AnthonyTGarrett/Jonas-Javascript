'use strict';

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Array(...new Set(gameEvents.values()));
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const event of gameEvents) {
  console.log(
    `[${event[0] < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${event[0]}: ${event[1]}`
  );
}

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const scorers = {};

// for (const player of game.scored) {
//   if (scorers[player]) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }

// console.log(scorers);

// console.log(`Odds of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odds of draw: ${game.odds.x}`);
// console.log(`Odds of victory ${game.team2}: ${game.odds.team2}`);

// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${+goal + 1}: ${player}`);
// }

// let sum = 0;

// for (const odd of Object.values(game.odds)) {
//   sum += odd;
// }
// sum /= Object.values(game.odds).length;

// console.log(`The average odds is: ${sum}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odds of ${teamStr} ${odd}`);
// }

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
