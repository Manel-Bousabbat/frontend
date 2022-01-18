import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classe } from '../models/Classe';
import { Department } from '../models/Department';
import { Matiere } from '../models/Matiere';

@Injectable({
  providedIn: 'root'
})
export class InfoSuppService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getDepts(): Observable<Department[]>{
    
    return this.http.get<Department[]>(`${environment.apiUrl}`+'ENSEIGNANT-SERVICE/Depts');
  }
  getAllMatieres(): Observable<Matiere[]>{
    
    return this.http.get<Matiere[]>(`${environment.apiUrl}`+'ENSEIGNANT-SERVICE/matieres');
  }

  getAllClasses(): Observable<Classe[]>{
    
    return this.http.get<Classe[]>(`${environment.apiUrl}`+'ETUDIANTS-SERVICE/classes');
  }

}
