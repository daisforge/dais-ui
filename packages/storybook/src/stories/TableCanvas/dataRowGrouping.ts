import { createSeededRandom } from '@df-storybook/data/tableData';

const seededRandom = createSeededRandom(42);

function randomNum(props?: { min?: number; max?: number }) {
  const { min = 0, max = 100 } = props ?? {};

  return Math.floor(seededRandom() * (max - min + 1)) + min;
}
const sports = [
  'Swimming',
  'Gymnastics',
  'Speed Skating',
  'Cross Country Skiing',
  'Short-Track Speed Skating',
  'Diving',
  'Cycling',
  'Biathlon',
  'Alpine Skiing',
  'Ski Jumping',
  'Nordic Combined',
  'Athletics',
  'Table Tennis',
  'Tennis',
  'Synchronized Swimming',
  'Shooting',
  'Rowing',
  'Fencing',
  'Equestrian',
  'Canoeing',
  'Bobsleigh',
  'Badminton',
  'Archery',
  'Wrestling',
  'Weightlifting',
  'Waterpolo',
  'Wrestling',
  'Weightlifting'
];
const countries = [
  'United States',
  'Russian Federation',
  'United Kingdom',
  'France',
  'Belgium',
  'Germany',
  'China',
  'Japan',
  'Korean'
];

const athletes = sports.map(
  (str) => ['Mr. ', 'Ms. '][randomNum({ max: 1 })] + str
);

export interface RowForGrouping {
  id: number;
  country: string;
  year: number;
  sport: string;
  athlete: string;
  gold: number;
  silver: number;
  bronze: number;
}

export function createRowsForGrouping(): RowForGrouping[] {
  const rows: RowForGrouping[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 10001; i++) {
    rows.push({
      id: i,
      year: 2015 + randomNum({ max: 3 }),
      country: countries[randomNum({ max: countries.length - 1 })] as string,
      sport: sports[randomNum({ max: sports.length - 1 })] as string,
      athlete: athletes[randomNum({ max: athletes.length - 1 })] as string,
      gold: randomNum({ max: 5 }),
      silver: randomNum({ max: 5 }),
      bronze: randomNum({ max: 5 })
    });
  }

  return rows.sort((r1, r2) => r2.country.localeCompare(r1.country));
}
