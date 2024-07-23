import { Injectable } from '@angular/core';
import { ExamCardTable } from './exam-card';

@Injectable({
  providedIn: 'root',
})
export class ExamCardService {
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
}
