import { Injectable } from '@angular/core';
import { SchoolTimetable, lessonsTimetable } from './school-timetable';

@Injectable({
  providedIn: 'root',
})
export class SchoolTimetableService {
  // export interface SchoolTimetable {
  //   earlyMorning: string;
  //   midMorning: string;
  //   afterlunch: string;
  // }
  timetable: SchoolTimetable[] = [
    {
      day: 'Mon',
      earlyMorning: 'RELI 121',
      midMorning: 'LITT 121',
      afterlunch: 'COMP111',
    },
    {
      day: 'Tue',
      earlyMorning: 'RELI 121',
      // midMorning: 'LITT 121',
      afterlunch: 'COMP111',
    },
    {
      day: 'Wed',
      // earlyMorning: 'RELI 121',
      // midMorning: 'LITT 121',
      // afterlunch: 'COMP111',
    },
    {
      day: 'Thur',
      earlyMorning: 'RELI 121',
      midMorning: 'LITT 121',
      afterlunch: 'COMP111',
    },
    {
      day: 'Fri',
      // earlyMorning: 'RELI 121',
      midMorning: 'LITT 121',
      afterlunch: 'COMP111',
    },
  ];
  // export interface lessonsTimetable {
  //   day: string;
  //   earlyMorning?: string;
  //   midMorning?: string;
  //   afterlunch?: string;
  //   evening?: string;
  // }
  lessonsTimetable: lessonsTimetable[] = [
    {
      day: 'Mon',
      // earlyMorning: 'BUST111',
      midMorning: 'GEOG118',
      afterlunch: 'STAT111',
      evening: 'KISW122',
    },
    {
      day: 'Tue',
      earlyMorning: 'BUST111',
      midMorning: 'GEOG118',
      afterlunch: 'STAT111',
      // evening: 'KISW122',
    },
    {
      day: 'Wed',
      // earlyMorning: 'BUST111',
      // midMorning: 'GEOG118',
      afterlunch: 'STAT111',
      evening: 'KISW122',
    },
    {
      day: 'Thur',
      earlyMorning: 'BUST111',
      midMorning: 'GEOG118',
      afterlunch: 'STAT111',
      // evening: 'KISW122',
    },
    {
      day: 'Fri',
      earlyMorning: 'BUST111',
      // midMorning: 'GEOG118',
      afterlunch: 'STAT111',
      evening: 'KISW122',
    },
  ];
  constructor() {}
}
