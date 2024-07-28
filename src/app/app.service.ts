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
  id = 'sc/com/0032/22';
  myId = 38;
  removeUser$ = this.http.delete(`http://localhost:3000/school/${this.myId}`);
  findIdNo = 11;
  findOneStudent$ = this.http.get(
    `http://localhost:3000/school/${this.findIdNo}`
  );
}
