import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../models/Department';
import { Enseignant } from '../models/Enseignant';
import { Matiere } from '../models/Matiere';
import { User } from '../models/user';
import { EnseignantService } from '../services/enseignant.service';
import { InfoSuppService } from '../services/info-supp.service';

@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.component.html',
  styleUrls: ['./add-prof.component.scss']
})
export class AddProfComponent implements OnInit {
  collapsed:boolean=false;
  users:User[]=[];
  addOk:boolean=false;
  userForm: FormGroup;
  departements: Department[]=[];
  departement:Department;
  matieres: Matiere[]=[];
  matiere:Matiere;
  enseignant: Enseignant;

  constructor(private fb: FormBuilder,
    private ensService:EnseignantService,
    private infoService : InfoSuppService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.infoService.getDepts()
    .subscribe(depts=>{
      this.departements=depts;
    });
    this.infoService.getAllMatieres()
    .subscribe(mats=>{
      this.matieres=mats;
    })
  }

  createForm(){
    this.userForm=this.fb.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      Datedenaissance: null,
      grade : ['', Validators.required],
      department: ['', Validators.required],
      matiere: ['', Validators.required],
    });
  }

  get f() { return this.userForm.controls; }
  

  submitForm(){
    if (this.userForm.invalid) {
      return;
    }

    this.enseignant=this.userForm.value;
    this.enseignant.matiere=this.matiere;
    this.enseignant.department=this.departement;
    console.log(this.enseignant);
    
    this.ensService.addEns(this.enseignant).subscribe(
      usr=>{
        console.log(usr)
        this.onReset();

        this.router.navigate(['/professor']);
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
