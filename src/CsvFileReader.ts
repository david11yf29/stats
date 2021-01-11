import fs from 'fs';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string , string, number, number, MatchResult, string]

export abstract class CsvFileReader {
  data: MatchData[] = [];
  
  constructor(public filename: string) {};
  
  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map(this.mapRow);
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