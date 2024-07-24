import { Injectable } from '@angular/core';
import { ExamCardTable } from './exam-card';

@Injectable({
  providedIn: 'root',
})
export class ExamCardService {
  schoolName: string = 'LAIKIPIA UNIVERSITY';
  pOBox: string = 'P.O. BOX 1100 – 20300 NYAHURURU, KENYA,';
  cell: string = '+254(0)729281902,+254(0)729285 902';
  email: string = 'info@laikipia.ac.ke web: www.laikipia.ac.ke';
  Tel: string = '+254(0)20 267 1779/1';
  examCardNotes = [
    'This card must be presented to the invigilators at each examination.',
    'The name appearing on this card is the name that will appear on your certifcate upon graduation.Report any anomalies or errors to the Registrar.',
    'Your registration number and not your name must appear on every answer book or supplementary sheet.',
  ];
  officialStudentName: string = 'Stephen Mainda Mongare';
  officialProgramme: string = 'BACHELOR OF SCIENCE (COMPUTER SCIENCE)';
  officialSession: string = 'HOLIDAY';
  officialRegNo: string = 'SC/COM/0032/22';
  officialClass: string = 'COMP/MC/FT/OCT/2022';
  officialSerialNo: string = '0494225090';
  constructor() {}
  units: ExamCardTable[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
  ];
  currentExamCard: ExamCardTable[] = [
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
    {
      unitCode: 'COMP 122',
      UnitName: 'Digital Electronics 1',
    },
  ];
  previousExamCard: ExamCardTable[] = [
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
  ];
  specExamCard: ExamCardTable[] = [
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
  ];
  supExamCard: ExamCardTable[] = [
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
    {
      unitCode: 'COMP421',
      UnitName: 'Computer Organization and architecture',
    },
  ];
  firstYearExamCard: ExamCardTable[] = [
    {
      unitCode: 'BUST123',
      UnitName: 'Business introduction 11',
    },
    {
      unitCode: 'BUST123',
      UnitName: 'Business introduction 11',
    },
    {
      unitCode: 'BUST123',
      UnitName: 'Business introduction 11',
    },
    {
      unitCode: 'BUST123',
      UnitName: 'Business introduction 11',
    },
    {
      unitCode: 'BUST123',
      UnitName: 'Business introduction 11',
    },
    {
      unitCode: 'BUST123',
      UnitName: 'Business introduction 11',
    },
  ];
  SecondYearExamCard: ExamCardTable[] = [
    {
      unitCode: 'STAT123',
      UnitName: 'Introduction to statistics',
    },
    {
      unitCode: 'STAT123',
      UnitName: 'Introduction to statistics',
    },
    {
      unitCode: 'STAT123',
      UnitName: 'Introduction to statistics',
    },
    {
      unitCode: 'STAT123',
      UnitName: 'Introduction to statistics',
    },
    {
      unitCode: 'STAT123',
      UnitName: 'Introduction to statistics',
    },
    {
      unitCode: 'STAT123',
      UnitName: 'Introduction to statistics',
    },
  ];
  thirdYearExamCard: ExamCardTable[] = [
    {
      unitCode: 'COM123',
      UnitName: 'Print Media',
    },
    {
      unitCode: 'COM123',
      UnitName: 'Print Media',
    },
    {
      unitCode: 'COM123',
      UnitName: 'Print Media',
    },
    {
      unitCode: 'COM123',
      UnitName: 'Print Media',
    },
    {
      unitCode: 'COM123',
      UnitName: 'Print Media',
    },
    {
      unitCode: 'COM123',
      UnitName: 'Print Media',
    },
  ];
}
