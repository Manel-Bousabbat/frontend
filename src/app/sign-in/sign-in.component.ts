import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  public error = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthentificationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    
  }

  

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }



    this.authenticationService.getUser(this.f.username.value, this.f.password.value)
      .subscribe(user => {
        if(user){
          console.log(user);
          localStorage.setItem('admin',JSON.stringify(user));
          this.router.navigate(['/dashboard']);
          
        }else{
          this.error = "Nom d'utilisateur ou mot de passe invalide";
          this.loading = false;
        }
      });

      this.submitted = true;
  }

}
