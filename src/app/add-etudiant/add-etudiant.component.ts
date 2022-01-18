import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classe } from '../models/Classe';
import { Department } from '../models/Department';
import { Etudiant } from '../models/Etudiant';
import { Matiere } from '../models/Matiere';
import { EtudiantService } from '../services/etudiant.service';
import { InfoSuppService } from '../services/info-supp.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent implements OnInit {

  collapsed:boolean=false;
  addOk:boolean=false;
  userForm: FormGroup;
  departements: Department[]=[];
  departement:Department;
  classes: Classe[]=[];
  classe:Classe;
  etudiant: Etudiant;

  constructor(private fb: FormBuilder,
    private etuService:EtudiantService,
    private infoService : InfoSuppService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.infoService.getDepts()
    .subscribe(depts=>{
      this.departements=depts;
    });
    this.infoService.getAllClasses()
    .subscribe(classes=>{
      this.classes=classes;
    })
  }

  createForm(){
    this.userForm=this.fb.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      date_naissance: null,
      niveau_etude : ['', Validators.required],
      classe: ['', Validators.required],
      cin: ['', Validators.required],
    });
  }

  get f() { return this.userForm.controls; }
  

  submitForm(){
    if (this.userForm.invalid) {
      return;
    }

    this.etudiant=this.userForm.value;
    this.etudiant.classe=this.classe;
    console.log(this.etudiant);
    
    this.etuService.addEtu(this.etudiant).subscribe(
      usr=>{
        console.log(usr)
        this.onReset();

        this.router.navigate(['/etudiant']);
      }
    );
  }

  getOut(){
    this.onReset();
    this.router.navigate(['/dashboard']);
    

  }

  onReset() {
    this.userForm.reset();
  }


}
