import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUser(login : String, password: String): Observable<User>{
    
    return this.http.get<User>(`${environment.apiUrl}`+'ADMIN-SERVICE/signin?login='+login+'&password='+password);
  }
}
