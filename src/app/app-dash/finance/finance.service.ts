import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://sandbox.safaricom.co.ke';
  // stream$ = this.http.get(this.apiUrl, { reportProgress: true });
  url = `${this.apiUrl}/oauth/v1/generate?grant_type=client_credentials`;
  headers = new HttpHeaders({
    Authorization:
      'Basic ' +
      btoa(
        `${environment.mpesa.consumerKey}:${environment.mpesa.consumerSecret}`
      ),
  });
  body = {
    access_token: 'c9SQxWWhmdVRlyh0zh8gZDTkubVF',
    expires_in: '3599',
  };
  stream$ = this.http.get(this.apiUrl, {
    headers: this.headers,
    reportProgress: true,
  });

  private accessToken = '';
  getAccessToken(): Observable<any> {
    const url = `${this.apiUrl}/oauth/v1/generate?grant_type=client_credentials`;
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          `${environment.mpesa.consumerKey}:${environment.mpesa.consumerSecret}`
        ),
    });

    return this.http.get(url, { headers: headers, params: this.body });
  }

  checkBalance(): Observable<any> {
    const url = `${this.apiUrl}/mpesa/accountbalance/v1/query`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    });
    const body = {
      Initiator: environment.mpesa.initiatorName,
      SecurityCredential: environment.mpesa.securityCredential,
      CommandID: 'AccountBalance',
      // PartyA: environment.mpesa.shortCode,
      IdentifierType: '4',
      Remarks: 'Balance Check',
      QueueTimeOutURL: 'http://127.0.0.1:4040/timeout',
      ResultURL: 'http://127.0.0.1:4040/result',
    };
    return this.http.post(url, body, { headers: headers });
  }
  authenticateAndCheckBalance() {
    this.getAccessToken().subscribe(
      (response: any) =>
        this.checkBalance().subscribe(
          (balanceResponse) => console.log(balanceResponse),
          (error) => console.error(error)
        ),
      (error) => console.error(error)
    );
  }
  mpesa() {
    const request = new HttpRequest(
      'GET',
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        ReportBody: true,
      }
    );
    console.log(request);
    return this.http.request(request);
  }
  // joke$ = this.http.get('/rooms/add');
  getRoom() {
    return this.http.get('/api/rooms');
  }
}
