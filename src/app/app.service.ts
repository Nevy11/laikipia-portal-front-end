import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ContentChild,
  ElementRef,
  Injectable,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUp } from './sign-up/sign-up';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  @ViewChild(SignUpComponent, { read: true }) signUp!: SignUpComponent;
  constructor(private http: HttpClient) {}
  // vcr = inject(ViewContainerRef);
  usersInfo$ = this.http.get('http://localhost:3000/school');
  addStudent(data: SignUp) {
    return this.http.post('http://localhost:3000/school', data);
  }
  myId = 'sccom003222';
  myBody = {
    regNo: this.myId,
    firstName: 'Samuel',

    middleName: 'ongwae',

    lastName: 'Mongare',

    course: 'BACHLOR OF SCIENCE',

    programme: 'health records',

    year: 4,

    sem: 2,
  };
  updateStudentId = 'sccom003522';
  updatedBody = {
    regNo: this.updateStudentId,
    firstName: 'Stephen',

    middleName: 'Mainda',

    lastName: 'Mongare',

    course: 'BACHLOR OF SCIENCE',

    programme: 'Computer Science',

    year: 3,

    sem: 1,
  };
  id = 'sccom003522';
  addStudent$ = this.http.post(
    'http://localhost:3000/school-database',
    this.myBody
  );

  removeUser$ = this.http.delete(
    `http://localhost:3000/school-database/${this.myId}`
  );

  findOneStudent$ = this.http.get(
    `http://localhost:3000/school-database/${this.id}`
  );

  updateStudent$ = this.http.put(
    `http://localhost:3000/school-database/${this.updateStudentId}`,
    this.updatedBody
  );
}
