import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  constructor(private http: HttpClient) { }
  

  getNbEtudiant(): Observable<number>{
    
    return this.http.get<number>(`${environment.apiUrl}`+'ETUDIANTS-SERVICE/etudiants/sum');
  }

  getEtudiants(): Observable<Etudiant[]>{
    
    return this.http.get<Etudiant[]>(`${environment.apiUrl}`+'ETUDIANTS-SERVICE/etudiants');
  }

  addEtu(etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(`${environment.apiUrl}` + 'ETUDIANTS-SERVICE/etudiant',etudiant);

  }


}
