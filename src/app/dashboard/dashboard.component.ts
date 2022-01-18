import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../services/enseignant.service';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  nbEns:number;
  nbEtu: number;

  constructor(private enseignantService: EnseignantService,
    private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.enseignantService.getNbEnseignant()
    .subscribe(nbr=>{
      this.nbEns=nbr;

    })

    this.etudiantService.getNbEtudiant()
    .subscribe(nb=> {
      this.nbEtu=nb;
    })
  }

}
