import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMailService {
  constructor(private httpClient: HttpClient) {}
  getAllUser() {
    return this.httpClient.get<any[]>('http://localhost:8080/users');
  }

  getExistMail(key: string) {
    console.log(key);
    return this.httpClient
      .get('http://localhost:8080/users')
      .pipe(filter((item: any) => item.mail === key));
  }
}
