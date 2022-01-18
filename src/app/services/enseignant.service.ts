import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enseignant } from '../models/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
   HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'false',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    })
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  getNbEnseignant(): Observable<number>{
    
    return this.http.get<number>(`${environment.apiUrl}`+'ENSEIGNANT-SERVICE/enseignants/sum');
  }

  getEnseignants(): Observable<Enseignant[]>{
    
    return this.http.get<Enseignant[]>(`${environment.apiUrl}`+'ENSEIGNANT-SERVICE/Enseignants');
  }

  addEns(enseignant):Observable<Enseignant>{
    return this.http.post<Enseignant>(`${environment.apiUrl}` + 'ENSEIGNANT-SERVICE/enseignantPost', JSON.stringify(enseignant),this.httpOptions);

  }
}
