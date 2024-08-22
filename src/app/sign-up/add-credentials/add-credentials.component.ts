import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-add-credentials',
  templateUrl: './add-credentials.component.html',
  styleUrl: './add-credentials.component.scss',
})
export class AddCredentialsComponent implements OnInit {
  constructor(private router: Router, private appService: AppService) {}
  ngOnInit(): void {
    this.appService.addStudent(this.body).subscribe(() => {});
  }
  body = {
    regNo: 'sc/com/0032/22',
    firstName: 'Hannet',

    middleName: 'Kemunto',

    lastName: 'Mongare',

    course: 'BACHLOR OF SCIENCE',

    programme: 'Journalism',

    year: 4,

    sem: 2,
  };
  goOn() {
    this.router.navigate(['dashboard']);
  }
}
