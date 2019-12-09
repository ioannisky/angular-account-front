import { Injectable } from '@angular/core';
import { Account } from './account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class AccountListService {
  private url="assets/accounts.json"
  
  constructor(private http: HttpClient) { }

  getAccounts (): Observable<Account[]> {
    return this.http.get<Account[]>(this.url);
  }
}
