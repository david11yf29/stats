import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
})
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',')
  })

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);

// [
//   [start:run]   [
//   [start:run]     '10/08/2018',
//   [start:run]     'Man United',
//   [start:run]     'Leicester',
//   [start:run]     '2',
//   [start:run]     '1',
//   [start:run]     'H',
//   [start:run]     'A Marriner'
//   // [start:run]   ],

