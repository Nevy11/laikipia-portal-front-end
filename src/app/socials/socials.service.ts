import { Injectable, OnInit, inject } from '@angular/core';
import { events, news } from './socials';
import { title } from 'process';
import { DateAdapter } from '@angular/material/core';

@Injectable({
  providedIn: 'root',
})
export class SocialsService implements OnInit {
  date = new Date().toString();
  ourDate!: string;
  news: news[] = [
    {
      title: 'LU grants proporsal writing training',
      content: ' Laikipia University has grant a writing work shop at Mandela',
    },
    {
      title: 'LU grants proporsal writing training',
      content: ' Laikipia University has grant a writing work shop at Mandela',
    },
    {
      title: 'LU grants proporsal writing training',
      content: ' Laikipia University has grant a writing work shop at Mandela',
    },
    {
      title: 'LU grants proporsal writing training',
      content: ' Laikipia University has grant a writing work shop at Mandela',
    },
    {
      title: 'LU grants proporsal writing training',
      content: ' Laikipia University has grant a writing work shop at Mandela',
    },
    {
      title: 'LU grants proporsal writing training',
      content: ' Laikipia University has grant a writing work shop at Mandela',
    },
    {
      title: 'LU grants proporsal writing training',
      content: ' Laikipia University has grant a writing work shop at Mandela',
    },
  ];
  events: events[] = [
    {
      date: this.ourDate,
      Title: 'Laikipia University 2023-2027 strategic plan launch',
      link: 'https://laikipia.ac.ke/article/laikipia-university-2023-2027-strategic-plan-launch-21st-june-2024',
    },
    // {
    //   date: this.ourDate,
    //   Title: 'Laikipia University 2023-2027 strategic plan launch',
    //   link: 'https://laikipia.ac.ke/article/laikipia-university-2023-2027-strategic-plan-launch-21st-june-2024',
    // },
    // {
    //   date: this.ourDate,
    //   Title: 'Laikipia University 2023-2027 strategic plan launch',
    //   link: 'https://laikipia.ac.ke/article/laikipia-university-2023-2027-strategic-plan-launch-21st-june-2024',
    // },
    // {
    //   date: this.ourDate,
    //   Title: 'Laikipia University 2023-2027 strategic plan launch',
    //   link: 'https://laikipia.ac.ke/article/laikipia-university-2023-2027-strategic-plan-launch-21st-june-2024',
    // },
    // {
    //   date: this.ourDate,
    //   Title: 'Laikipia University 2023-2027 strategic plan launch',
    //   link: 'https://laikipia.ac.ke/article/laikipia-university-2023-2027-strategic-plan-launch-21st-june-2024',
    // },
    // {
    //   date: this.ourDate,
    //   Title: 'Laikipia University 2023-2027 strategic plan launch',
    //   link: 'https://laikipia.ac.ke/article/laikipia-university-2023-2027-strategic-plan-launch-21st-june-2024',
    // },
  ];
  constructor() {}
  ngOnInit(): void {
    // this.ourDate = this.date.format('17/4/2003', 'dd/MM/yyyy');
    this.ourDate = this.date;
  }
}
