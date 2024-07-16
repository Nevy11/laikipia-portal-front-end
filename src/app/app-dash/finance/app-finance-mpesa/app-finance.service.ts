import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppFinance, Authentication } from './app-finance';
import { mergeMap } from 'rxjs';
import { Rooms } from './rooms';

@Injectable({
  providedIn: 'root',
})
export class AppFinanceService {
  constructor(private http: HttpClient) {}
  api =
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

  getAuthentication() {
    const header = new HttpHeaders({
      Authorization: `Basic SWJvRJdI14NAvMvuqlgcmXE2VhmGmyD7EUJJGcjiDAcGAfyG3ZhnIAoGPJuvzdbXE6Gb1d0AJCKc06y4l8adgOUa5QFgUJL4UjcIS85HAQFFbSXg`,
    });
    return this.http.get<Authentication>(this.api, {
      headers: header,
    });
  }
  Express() {
    return this.http.post<AppFinance>(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        BusinessShortCode: '4565692',
        Password:
          'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3',
        Timestamp: '20240716103027',
        TransactionType: 'CustomerBuyGoodsOnline',
        Amount: '1',
        PartyA: '254792700138',
        PartyB: '4565692',
        PhoneNumber: '254792700138',
        CallBackURL: 'https://mydomain.com/pat',
        AccountReference: 'Test',
        TransactionDesc: 'Test',
      }
    );
  }

  learningNestJs() {
    return this.http.get<Rooms[]>('http://localhost:3000');
  }
}
