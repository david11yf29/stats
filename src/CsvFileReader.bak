import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string , string, number, number, MatchResult, string]

export class CsvFileReader {
  data: MatchData[] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // type assertions 'H' 'A' 'D'
        row[6]
      ];
    });
  }
}

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